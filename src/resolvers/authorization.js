import { combineResolvers, skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server';

const toCursorHash = string => Buffer.from(string).toString('base64');

export const isAuthenticated = (parent, args, { me }) =>
	me ? skip : new ForbiddenError('Not authenticated as user.');

export const isAdmin = combineResolvers(
	isAuthenticated,
	(parent, args, { me: { role } }) =>
		role === 'ADMIN'
			? skip
			: new ForbiddenError('Not authorized as admin.'),
);

export const isAccountOwner = async (
	parent,
	{ id },
	{ models, me },
) => {
	const account = await models.Account.findById(id);

	if (account.userId !== me.id) {
		throw new ForbiddenError('Not authenticated as owner.');
	}

	return skip;
};


export const isCorrectPrivateKey = async (parent, args, { models }) => {
	if (typeof args.private_key !== 'string') throw new ForbiddenError('Private key required');

	const user = await models.User.findOne({ private_key: args.private_key });
	if (!user) throw new ForbiddenError('incorrect private_key');

	const Player = JSON.parse(args.playerBeanObject);

	const uid = toCursorHash(`${Player.playerInfo.accountName}${Player.playerInfo.userId}${Player.playerInfo.createrTime}`);

	const account = await models.Account.findOne({ uid });

	if (account) {
		if (user.id !== account.userId.toString()) throw new ForbiddenError('Not authenticated as owner.');
	}
	return skip;
};
