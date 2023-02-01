export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'cHATS::DELETE_CHAT';

export const addChat = (id, name) => ({
    type: ADD_CHAT,
    payload: {
        id,
        name,
    }
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id
});