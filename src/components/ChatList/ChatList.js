import { nanoid } from 'nanoid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './ChatList.css';

// const chats = [
//     { name: 'Chat 1', id: 1 },
//     { name: 'Chat 2', id: 2 },
//     { name: 'Chat 3', id: 3 }
// ];

export function ChatList({ onAddChat, chats }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setValue('')
        onAddChat({
            id: nanoid(),
            name: value
        })
    }
    return (
        <>
            <div className="mainChatList">
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.id}>
                            <NavLink to={`/chats/${chat.name}`}
                                style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'blue'
                                })}>
                                {chat.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <form 
                className="form_chatList"
                onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="New chat"
                        variant="outlined"
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                    <IButton
                        type="submit"
                        variant="contained">
                        Create new chat</IButton>
                </form>
            </div>
        </>
    )
}
