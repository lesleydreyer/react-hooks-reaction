import { NEW_MESSAGE, SET_USERNAME } from './types';
import uuid from 'uuid/v4';

//action creator
export const newMessage = ({ text, username }) => ({  //could also do text => { return { type: NEW..etc }} but wrapping with () implicitly returns to shorten the copy
    type: NEW_MESSAGE,
    item: { id: uuid(), text, username, timestamp: Date.now() }
});

export const setUsername = username => ({
    type: SET_USERNAME,
    username
});

export const createReaction = ({ type, emoji, username, messageId }) => ({
    type,
    item: { id: uuid(), timestamp: Date.now(), emoji, username, messageId }
});