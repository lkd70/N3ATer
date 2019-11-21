import { isAccountOwner, isAuthenticated, isCorrectPrivateKey } from './authorization';
import pubsub, { EVENTS } from '../subscription';
import { combineResolvers } from 'graphql-resolvers';

const toCursorHash = string => Buffer.from(string).toString('base64');

const fromCursorHash = string => Buffer.from(string, 'base64').toString('ascii');

export default {
	Query: {
		accounts: async (parent, { cursor, limit = 1000 }, { models }) => {
			const cursorOptions = cursor
				? {
					createdAt: {
						$lt: fromCursorHash(cursor),
					},
				}
				: {};
			const accounts = await models.Account.find(
				cursorOptions,
				null,
				{
					sort: { createdAt: -1 },
					limit: limit + 1,
				},
			);

			const hasNextPage = accounts.length > limit;
			const edges = hasNextPage ? accounts.slice(0, -1) : accounts;

			return {
				edges,
				pageInfo: {
					hasNextPage,
					endCursor: toCursorHash(edges[edges.length - 1].createdAt.toString(),),
				},
			};
		},
		account: (parent, { id }, { models }) => models.Account.findById(id),
	},

	Mutation: {
		updateAccount: combineResolvers(
			isAuthenticated,
			async (parent, { playerBeanObject }, { models, me }) => {
				const Player = JSON.parse(playerBeanObject);
				const uid = `${Player.playerInfo.accountName}${Player.playerInfo.userId}${Player.playerInfo.createrTime}`;
				const account = await models.Account.findOneAndUpdate({
					uid: toCursorHash(uid),
					userId: me.id,
				}, {
					...Player,
				}, { upsert: true, new: true, runValidators: true });

				pubsub.publish(EVENTS.MESSAGE.CREATED, {
					accountCreated: { account: account.id },
				});

				return account;
			},
		),

		updateAccountWithKey: combineResolvers(
			isCorrectPrivateKey,
			async (parent, { private_key, playerBeanObject }, { models }) => {
				const player = JSON.parse(playerBeanObject);
				const uid = `${player.playerInfo.accountName}${player.playerInfo.userId}${player.playerInfo.createrTime}`;
				const user = await models.User.findOne({ private_key });
				const account = await models.Account.findOneAndUpdate({
					uid: toCursorHash(uid),
				}, {
					...player,
					userId: user.id
				}, { upsert: true, new: true, runValidators: true });

				pubsub.publish(EVENTS.MESSAGE.CREATED, {
					accountCreated: { account: account.id },
				});

				return account;
			},
		),

		deleteAccount: combineResolvers(
			isAuthenticated,
			isAccountOwner,
			async (parent, { id }, { models }) => {
				const account = await models.Account.findById(id);

				if (account) {
					await account.remove();
					return true;
				}
				return false;

			},
		),
	},

	Account: {
		user: (account, args, { loaders }) => loaders.user.load(account.userId),
	},

	Subscription: {
		accountCreated: {
			subscribe: () => pubsub.asyncIterator(EVENTS.MESSAGE.CREATED),
		},
	},
};
