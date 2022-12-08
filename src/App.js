import { useState, useEffect } from 'react'
import { Form } from './components/Form/Form'
import { MessageList } from './components/MessageList/MessageList'
import { AUTHOR } from './constants'

export function App() {
  const [messages, setMessages] = useState([])
  const addMessage = (newMessage) => {
    console.log('newMessage', newMessage);
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Im BOT'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  return (
    <>
      <h1>Welcome to chat!</h1>
      <Form addMessage={addMessage} />
      <MessageList messages={messages} />
    </>
  )
}
