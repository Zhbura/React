import { nanoid } from "nanoid";
import { AUTHOR } from "../../components/utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessages = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMessage,
    }
})

export const deleteMessage = (chatId, idMsgToDelete) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        idMsgToDelete
    }
})

let timeout;

export const addMessagesWithThunk = (chatId, newMessage) => (dispatch, getState) => {
    dispatch(addMessages(chatId, newMessage));

    if (newMessage.author !== AUTHOR.BOT) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const messageForBot = {
                message: "Hi, I am a bot",
                author: AUTHOR.BOT,
                id: nanoid()
            }
            dispatch(addMessages(chatId, messageForBot))
        }, 3000)
    }
}