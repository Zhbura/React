import { Message } from '../Message/Message';
import './MessageList.css'

export const MessageList = ({ messages }) => {
    return (
        <>
            <div className="message">
                {messages.map((message) => (
                    <Message author={message.author} key={message.id} message={message.message} />
                ))}
            </div>
        </>
    )
}