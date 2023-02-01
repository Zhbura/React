import { createStore, compose, combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import { messagesReducer } from './messages/reducer';
import { chatsReducer } from './chats/reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());