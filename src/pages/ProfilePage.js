import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import * as types from '../store/profile/types';
import { changeName } from '../store/profile/actions';

export function ProfilePage() {
    const [showName, setShowName] = useState(true);

    const { name } = useSelector((store) => store);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = () => {

        dispatch(changeName(value));
        setValue('');
    }

    return (
        <>
            <h1>Profile page</h1>
            {showName && <h2>{name}</h2>}
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={handleChange}
            >Change name</button>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={!showName}
                        onChange={() => setShowName(!showName)}
                    />
                    {showName ? 'Скрыть имя' : 'Показать имя'}
                </label>
            </div>


        </>
    )
}