import { useParams } from "react-router";
import { Message } from "../Message/Message";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/messages/actions";
import './MessageList.css'
import { set } from "firebase/database";
import { getMessageRefById } from "../../servises/firebase";

export const MessageList = ({ messages }) => {

    const { chatId } = useParams();
    // const dispatch = useDispatch();

    const handleDelete = (id) => {
        // dispatch(deleteMessage(chatId, id));

        // remove(getMessageRefById(chatId, id));
        set(getMessageRefById(chatId, id), null);
    }

    return (
        <>
            <div className="message">
                {messages.map((message) => (
                    <div key={message.id} className="message-block">
                        <Message message={message.message} />
                        <button onClick={() => handleDelete(message.id)} >x</button>
                    </div>
                ))}
            </div>
        </>
    )
}