import { useState, useEffect } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList.js';
import './App.css';

export function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'bot',
          text: 'Hello, I am Bot'
        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }

  }, [messages])
  return (
    <>
      <h1 className="heading_title">Welcome to chat!</h1>
      <div className="components"><Form addMessage={addMessage} />
        <MessageList messages={messages} /></div>
    </>
  )
}