import { useState, useEffect } from 'react';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList/MessageList';
import { ChatList } from '../components/ChatList/ChatList';
import { useParams, Navigate } from 'react-router-dom';
import './ChatPage.css';

export function ChatPage({ onAddChat, onAddMessage, deleteChat, messages, chats }) {
    const { chatId } = useParams();

    useEffect(() => {
        if (chatId &&
            messages[chatId].length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === 'user') {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: 'bot',
                    text: 'Hello, I am Bot'
                })
            }, 1500)
            return () => {
                clearTimeout(timeout)
            }
        }

    }, [chatId, messages])

    const handleAddMessage = (message) => {
        if (chatId) {
            onAddMessage(chatId, message)
        }
    }

    if (chatId && !messages[chatId]) {
        return <Navigate to="chats" replace />
    }

    return (
        <>
            <h1 className="heading_title">Welcome to {chatId}!</h1>
            <div className="chats_messages_block">
            <ChatList chats={chats} onAddChat={onAddChat} />
            <div className="messages_block">
                <MessageList messages={chatId ? messages[chatId] : []} />
                <Form addMessage={handleAddMessage} />
            </div>
            </div>
            

        </>
    )
}