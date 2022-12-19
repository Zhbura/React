import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../store/profile/types'

export function ProfilePage() {
    const name = useSelector((store) => store.name);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch({ type: types.CHANGE_NAME, payload: value });
        setValue('');
    }

    return (
        <>
            <h1>Profile page</h1>
            <h2>{name}</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={handleChange}
            >Change name</button>
        </>
    )
}