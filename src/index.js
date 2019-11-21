import 'dotenv/config';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import models, { connectDb } from './models';
import cors from 'cors';
import DataLoader from 'dataloader';
import express from 'express';
import http from 'http';
import jwt from 'jsonwebtoken';
import loaders from './loaders';
import morgan from 'morgan';
import resolvers from './resolvers';
import schema from './schema';

const isProduction = process.env.PRODUCTION.toLowerCase() === 'true' || false;

const app = express();

app.use(cors());

if (!isProduction) app.use(morgan('dev'));

const getMe = async req => {
	const token = req.headers['x-token'];

	if (token) {
		try {
			return await jwt.verify(token, process.env.SECRET);
		} catch (e) {
			throw new AuthenticationError('Your session has expired. Please sign in again.',);
		}
	}
};

const server = new ApolloServer({
	playground: !isProduction,
	introspection: !isProduction,
	debug: !isProduction,
	typeDefs: schema,
	resolvers,
	formatError: error => {
		const account = error.message
			.replace('SequelizeValidationError: ', '')
			.replace('Validation error: ', '');

		return {
			...error,
			account,
		};
	},
	context: async ({ req, connection }) => {
		if (connection) {
			return {
				models,
				loaders: {
					user: new DataLoader(keys =>
						loaders.user.batchUsers(keys, models),),
				},
			};
		}

		if (req) {
			const me = await getMe(req);

			return {
				models,
				me,
				secret: process.env.SECRET,
				loaders: {
					user: new DataLoader(keys =>
						loaders.user.batchUsers(keys, models),),
				},
			};
		}
	},
});

server.applyMiddleware({
	app,
	path: '/graphql',
	bodyParserConfig: {
		limit: process.env.BODY_PARSE_LIMIT || '100mb',
	},
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 8000;

connectDb().then(() => {
	httpServer.listen({ port }, () => {
		// eslint-disable-next-line no-console
		console.log(`Serving at: http://localhost:${port}/graphql`);
	});
});
