import { AuthenticationError, UserInputError } from 'apollo-server';
import { isAdmin, isAuthenticated } from './authorization';
import { combineResolvers } from 'graphql-resolvers';
import jwt from 'jsonwebtoken';

const createToken = (user, secret, expiresIn) => {
	const { id, email, username, role, private_key, public_key } = user;
	return jwt.sign({ id, email, username, role, private_key, public_key }, secret, {
		expiresIn,
	});
};

export default {
	Query: {
		users: (parent, args, { models }) => models.User.find(),
		user: (parent, { id }, { models }) => models.User.findById(id),
		me: (parent, args, { models, me }) => {
			if (!me) {
				return null;
			}

			return models.User.findById(me.id);
		},
	},

	Mutation: {

		renewPrivateKey: combineResolvers(
			isAuthenticated,
			(parent, {}, { models, me }) => models.User.findByIdAndUpdate(
				me.id,
				{ private_key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) },
				{ new: true },
			),
		),

		signUp: async (
			parent,
			{ username, email, password },
			{ models, secret },
		) => {
			const user = await models.User.create({
				username,
				email,
				password,
			});

			return { token: createToken(user, secret, '30m') };
		},

		signIn: async (
			parent,
			{ login, password },
			{ models, secret },
		) => {
			const user = await models.User.findByLogin(login);

			if (!user) {
				throw new UserInputError('No user found with this login credentials.',);
			}

			const isValid = await user.validatePassword(password);

			if (!isValid) {
				throw new AuthenticationError('Invalid password.');
			}

			return { token: createToken(user, secret, '30m') };
		},

		updateUser: combineResolvers(
			isAuthenticated,
			(parent, { username }, { models, me }) => models.User.findByIdAndUpdate(
				me.id,
				{ username },
				{ new: true },
			),
		),

		deleteUser: combineResolvers(
			isAdmin,
			async (parent, { id }, { models }) => {
				const user = await models.User.findById(id);

				if (user) {
					await user.remove();
					return true;
				}
				return false;

			},
		),
	},

	User: {
		accounts: (user, args, { models }) => models.Account.find({
			userId: user.id,
		}),
	},
};
