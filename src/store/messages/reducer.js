import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [
                    ...state[action.payload.chatId],
                    action.payload.newMessage
                ]
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: state[action.payload.chatId].filter(
                    (message) => message.id !== action.payload.idMsgToDelete)
            }
        }
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload.id]: [],
            }
        }
        case DELETE_CHAT: {
            const newMessage = { ...state };
            delete newMessage[action.payload];
            return newMessage;
        }
        default:
            return state;
    }
}