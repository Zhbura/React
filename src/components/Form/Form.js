import { useState } from 'react';
import { Button } from '../ui/Button';
import './Form.css'

export function Form({ addMessage }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: 'user',
            text
        });
        setText('');
    }
    return (
        <>
            <form
                className="form"
                onSubmit={handleSubmit}>
                <input
                    className="input__form"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}>

                </input>
                <Button type="submit">Add message</Button>
            </form>
        </>
    )
}