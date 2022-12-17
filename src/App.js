import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage';
import { ChatPage } from './pages/ChatPage';
import { ChatList } from './components/ChatList/ChatList';

const defaulMessages = {
  User_chat: [
    { author: 'user', text: 'one text' },
    { author: 'user', text: 'two text' }
  ],
}

export function App() {
  const [messages, setMessages] = useState(defaulMessages);

  const chats = Object.keys(messages).map((chat) => ({
    id: nanoid(),
    name: chat
  }))
  const onAddChat = (newChat) => {
    setMessages({
      ...messages,
      [newChat.name]: []
    })
  }

  const onAddMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage]
    })
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chats">
            <Route index element={<ChatList onAddChat={onAddChat} chats={chats} />} />
            <Route path=":chatId"
              element={<ChatPage chats={chats}
                messages={messages}
                onAddChat={onAddChat}
                onAddMessage={onAddMessage}
              />}
            />
          </Route>
        </Route>
        <Route path="*" element={<h1>ERROR 404, PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </>
  )
}