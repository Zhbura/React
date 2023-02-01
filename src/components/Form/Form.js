import { useState, useRef, useEffect } from "react";
import './Form.css';

export const Form = ({ onSubmit, buttonValue }) => {
    const [value, setValue] = useState('');
    const handleInput = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    }
    useEffect(() => {
        handleInput.current?.focus();
    }, [])
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="inputText" ref={handleInput} type="text" value={value} onChange={handleChange}></input>
            <input className="inputSubmit" type="submit" value={buttonValue}></input>
        </form>
    )
}