import { useSelector, useDispatch } from "react-redux";
import { changeShowName, changeName } from "../../store/profile/actions";
import { useEffect, useState } from "react";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { auth, getProfileNameRef, getProfileRefShowName, logOut } from "../../servises/firebase";
import { set, onValue } from "firebase/database";

export const Profile = () => {
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [showName, setShowName] = useState(false);

    const handleChangeShowName = () => {
        set(getProfileRefShowName, !showName)
    }

    const handleChangeName = () => {
        // записываем имя в б/д profile
        set(getProfileNameRef(auth.currentUser.uid), value)
    }

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err)
        }
    }

    // отображаем данные на странице

    useEffect(() => {
        // создаем объект для хранения в б/д
        const unsubscribeName = onValue(getProfileNameRef(auth.currentUser.uid), (snapshot) => {
            setName(snapshot.val())
        })

        const unsubscribeShowName = onValue(getProfileRefShowName, (snapshot) => {
            setShowName(snapshot.val())
        })

        return () => {
            unsubscribeName();
            unsubscribeShowName();
        }

    }, [])
    return (
        <>
            <h1>Profile page</h1>
            <button onClick={handleLogOut}>logOut</button>
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