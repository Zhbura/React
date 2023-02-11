import { useParams } from "react-router";
import { Message } from "../Message/Message";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/messages/actions";
import './MessageList.css'

export const MessageList = ({ messages }) => {

    const { chatId } = useParams();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteMessage(chatId, id));
    }

    return (
        <>
            <div className="message">
                {messages.map((message) => (
                    <div key={message.id} className="message-block">
                        <Message author={message.author} message={message.message} />
                        <button onClick={() => handleDelete(message.id)} >x</button>
                    </div>
                ))}
            </div>
        </>
    )
}