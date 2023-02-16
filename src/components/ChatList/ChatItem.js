import { NavLink } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";

export const ChatItem = ({ chat, onDeleteChat }) => (
    <div className="chatItem">
        <NavLink
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
            to={`/chats/${chat.id}`}
        >{chat.name}</NavLink>
        <DeleteButton id={chat.id} onClick={onDeleteChat} />
    </div>
);