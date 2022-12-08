import { useState } from 'react'
import { Button } from './Button'
import { AUTHOR } from '../constants'

export function Form({ addMessage }) {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            author: AUTHOR.user,
            text
        })
        setText('')
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <Button type="submit">Add message</Button>
            </form>
        </>
    )
}