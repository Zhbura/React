import { Outlet } from "react-router-dom";
import { Form } from "../Form/Form";
import { ChatItem } from "./ChatItem";
import { useSelector, useDispatch } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/actions';
import { nanoid } from 'nanoid';
import { selectChats } from '../../store/chats/selectors';
import './ChatList.css';

export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = nanoid();
        dispatch(addChat(newId, newChatName));
    }

    const handleDeleteChat = (idToDelete) => {
        dispatch(deleteChat(idToDelete));
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
