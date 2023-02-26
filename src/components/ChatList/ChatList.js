import { Outlet, useParams } from "react-router-dom";
import { Form } from "../Form/Form";
import { ChatItem } from "./ChatItem";
import { useSelector, useDispatch } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/actions';
import { nanoid } from 'nanoid';
import { selectChats } from '../../store/chats/selectors';
import './ChatList.css';
import { getChatsRef, getChatsByIdRef, getMessagesRefByChatId, getMessageListRefByChatId } from "../../servises/firebase";
import { useEffect, useState } from "react";
import { onValue, set, remove, onChildRemoved, onChildAdded } from "firebase/database";

export const ChatList = () => {
    // const chats = useSelector(selectChats);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const unsubscribe = onValue(getChatsRef, (snapshot) => {
            const newChats = [];
            snapshot.forEach((child) => {
                newChats.push(child.val())
            })
            setChats(newChats);
        })

        return unsubscribe;
    }, [])

    // const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = nanoid();
        // dispatch(addChat(newId, newChatName));

        set(getChatsByIdRef(newId), { id: newId, name: newChatName });
        set(getMessagesRefByChatId(newId), { empty: true });
    }

    const handleDeleteChat = (id) => {
        // dispatch(deleteChat(idToDelete));

        // удаление чатов (2 способа):
        // remove(getChatsByIdRef(id))
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
