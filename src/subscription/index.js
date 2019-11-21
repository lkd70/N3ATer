import * as MESSAGE_EVENTS from './account';
import { PubSub } from 'apollo-server';

export const EVENTS = {
	MESSAGE: MESSAGE_EVENTS,
};

export default new PubSub();
