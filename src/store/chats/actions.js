import { onChildAdded, onChildRemoved } from "firebase/database";
import { getChatsRef } from "../../servises/firebase";

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

// Миддлвар initChatsTracking, не работает, выдает ошибку (картинка в src),
// он как будто копирует заново уже созданные чаты с одинаковыми id и от этого
// выскакивает ошибка об уникальности.

// export const initChatsTracking = () => (dispatch) => {
//     onChildAdded(getChatsRef, (snapshot) => {
//         dispatch(addChat(snapshot.val().id, snapshot.val().name));
//     });

//     onChildRemoved(getChatsRef, (snapshot) => {
//         dispatch(deleteChat(snapshot.val().id));
//     });
// };