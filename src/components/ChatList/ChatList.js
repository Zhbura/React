import { Outlet, useParams } from "react-router-dom";
import { Form } from "../Form/Form";
import { ChatItem } from "./ChatItem";
import { useSelector, useDispatch } from 'react-redux';
import { initChatsTracking } from '../../store/chats/actions';
import { nanoid } from 'nanoid';
import { selectChats } from '../../store/chats/selectors';
import './ChatList.css';
import { getChatsRef, getChatsByIdRef, getMessagesRefByChatId, getMessageListRefByChatId } from "../../servises/firebase";
import { useEffect, useState } from "react";
import { onValue, set, onChildRemoved, onChildAdded } from "firebase/database";

// 1 вариант взаимодействия с firebase через компонент. Всё работает, в базе данных отображается верно.

export const ChatList = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const unsubscribe = onChildAdded(getChatsRef, (snapshot) => {
            setChats((prevChats) => [...prevChats, snapshot.val()]);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const unsubscribe = onChildRemoved(getChatsRef, (snapshot) => {
            setChats((prevChats) =>
                prevChats.filter(({ id }) => id !== snapshot.val()?.id)
            );
        });

        return unsubscribe;
    }, []);

    const handleAddChat = (newChatName) => {
        const newId = nanoid();

        set(getChatsByIdRef(newId), { id: newId, name: newChatName });
        set(getMessagesRefByChatId(newId), { empty: true });
    }

    const handleDeleteChat = (id) => {

        set(getChatsByIdRef(id), null);
        set(getMessagesRefByChatId(id), null);
    }
    return (
        <>
            <h1 className="heading_title">Чтобы начать общение - создай чат!</h1>
            <div className="chats_messages_block">
                <div className="borderChatList">
                    {chats.map((chat) => (
                        <ChatItem key={chat.id} chat={chat} onDeleteChat={handleDeleteChat} />
                    ))}
                    <Form onSubmit={handleAddChat} buttonValue={'Создать чат'} />
                </div>
                <Outlet />
            </div>
        </>
    )
}

// 2 вариант взаимодействия с firebase через store. '../../store/chats/actions'

// export const ChatList = () => {
//     const chats = useSelector(selectChats);

//     const dispatch = useDispatch();

//     const handleAddChat = (newChatName) => {
//         const newId = nanoid();

//         set(getChatsByIdRef(newId), { id: newId, name: newChatName });
//         set(getMessagesRefByChatId(newId), { empty: true });
//     }

//     const handleDeleteChat = (id) => {
//         set(getChatsByIdRef(id), null);
//         set(getMessagesRefByChatId(id), null);
//     }

//     useEffect(() => {
//         dispatch(initChatsTracking());
//     }, [])

//     return (
//         <>
//             <h1 className="heading_title">Чтобы начать общение - создай чат!</h1>
//             <div className="chats_messages_block">
//                 <div className="borderChatList">
//                     {chats.map((chat) => (
//                         <ChatItem key={chat.id} chat={chat} onDeleteChat={handleDeleteChat} />
//                     ))}
//                     <Form onSubmit={handleAddChat} buttonValue={'Создать чат'} />
//                 </div>
//                 <Outlet />
//             </div>
//         </>
//     )
// }