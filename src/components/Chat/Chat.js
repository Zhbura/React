import { Form } from "../Form/Form";
import { nanoid } from "nanoid";
import { AUTHOR } from "../utils/constants";
import { MessageList } from "../MessageList/MessageList";
import { Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMessagesWithThunk } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import "./ChatPage.css";
import { useEffect, useState } from "react";
import { onChildRemoved, onValue, set } from "firebase/database";
import { getMessageListRefByChatId, getMessagesRefByChatId, getMessageRefById } from "../../servises/firebase";

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    // const messages = useSelector(selectMessages);
    // const dispatch = useDispatch();

    const { chatId } = useParams();

    const handleAddMessage = (message) => {
        sendMessage(message, AUTHOR.ME)
    }

    const sendMessage = (message, author) => {
        const newMsg = {
            message,
            author,
            id: nanoid()
        }
        // dispatch(addMessagesWithThunk(chatId, newMsg));

        set(getMessageRefById(chatId, newMsg.id), newMsg);
    }

    useEffect(() => {
        const unsubscribe = onValue(getMessagesRefByChatId(chatId), (snapshot) => {
            if (!snapshot.val()?.empty) {
                setMessages(null);
            }
        })
        return unsubscribe;
    }, [chatId])

    useEffect(() => {
        const unsubscribe = onValue(getMessageListRefByChatId(chatId), (snapshot) => {
            const newMessages = [];
            snapshot.forEach((message) => {
                newMessages.push(message.val())
            })
            setMessages(newMessages)
        })

        return unsubscribe;
    }, [chatId])

    useEffect(() => {
        const unsubscribe = onChildRemoved(getMessageListRefByChatId(chatId),
            (snapshot) => {
                setMessages((prevMessages) =>
                    prevMessages.filter(({ id }) => id !== snapshot.val()?.id))
            })

        return unsubscribe;
    }, [chatId])

    if (!messages) {
        return <Navigate to="/chats" replace />
    }

    return (
        <>
            <h1 className="heading_title">Welcome to chat!</h1>
            <div className="messages_block">
                <MessageList messages={messages} />
                <Form onSubmit={handleAddMessage} buttonValue={'Отправить сообщение'} />
            </div>
        </>
    )
};