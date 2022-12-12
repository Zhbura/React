import { useState, useEffect, useRef } from 'react';
import './Form.css';
import IButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Form({ addMessage }) {
    const [text, setText] = useState('');
    const textField = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: 'user',
            text
        });
        setText('');
    }

    useEffect(() => {
        textField.current?.focus()
    }, []);

    return (
        <>
            <form
                className="form"
                onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    inputRef={textField}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <IButton
                    type="submit"
                    className="btnMUI"
                    variant="contained">Add message</IButton>
            </form>
        </>
    )
}