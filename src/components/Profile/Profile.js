import { useSelector, useDispatch } from "react-redux";
import { changeShowName, changeName } from "../../store/profile/actions";
import { useState } from "react";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const dispatch = useDispatch();

    const handleChangeShowName = () => {
        dispatch(changeShowName)
    }

    const [value, setValue] = useState('');
    const handleChangeName = () => {
        dispatch(changeName(value))
    }
    return (
        <>
            <h1>Profile page</h1>
            {showName && <h1>{name}</h1>}
            <label>
                <input
                    type="checkbox"
                    checked={showName}
                    onChange={handleChangeShowName}
                />
                {showName ? 'Hide name' : 'Show name'}
            </label>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleChangeName}>change name</button>
            </div>
        </>
    )
}