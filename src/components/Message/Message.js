import { onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { getProfileNameRef } from "../../servises/firebase";
import { auth } from "../../servises/firebase";

export const Message = ({ message, id }) => {
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const unsubscribe = onValue(getProfileNameRef(auth.currentUser.uid), (snapshot) => {
            setAuthor(snapshot.val())
        })

        return unsubscribe;
    }, [author])

    return (
        <>
            <div>{author}: {message}!</div>
        </>
    )
}