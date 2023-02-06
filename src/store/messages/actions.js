import { nanoid } from "nanoid";
import { AUTHOR } from "../../components/utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessages = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMessage,
    }
})

let timeout;

export const addMessagesWithThunk = (chatId, newMessage) => (dispatch, getState) => {
    dispatch(addMessages(chatId, newMessage));

    if (newMessage.author !== AUTHOR.BOT) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const messageForBot = {
                message: "I am a bot",
                author: AUTHOR.BOT,
                id: nanoid()
            }
            dispatch(addMessages(chatId, messageForBot))
        }, 3000)
    }
}