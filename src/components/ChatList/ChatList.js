import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './ChatList.css';

const chats = [
    { name: 'Chat 1', id: 1 },
    { name: 'Chat 2', id: 2 },
    { name: 'Chat 3', id: 3 }
];

export function ChatList() {
    return (
        <List className="listMUI">
            {chats.map((chat) => (
                <ListItem key={chat.id}>{chat.name}</ListItem>
            ))}
        </List>
    )
}
