import { Form } from "../Form/Form";
import { nanoid } from "nanoid";
import { AUTHOR } from "../utils/constants";
import { MessageList } from "../MessageList/MessageList";
import { Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMessagesWithThunk } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import "./ChatPage.css";

export const Chat = () => {
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    const params = useParams();
    const { chatId } = params;

    const handleAddMessage = (message) => {
        sendMessage(message, AUTHOR.ME)
    }

    const sendMessage = (message, author) => {
        const newMsg = {
            message,
            author,
            id: nanoid(),
        }
        dispatch(addMessagesWithThunk(chatId, newMsg));
    }

    if (!messages[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (
        <>
            <h1 className="heading_title">Welcome to chat!</h1>
            <div className="messages_block">
                <MessageList messages={messages[chatId]} />
                <Form onSubmit={handleAddMessage} buttonValue={'Отправить сообщение'} />
            </div>
        </>
    )
};