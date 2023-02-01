export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessages = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMessage,
    }
})