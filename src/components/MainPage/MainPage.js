import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp, login } from "../../servises/firebase";

export const MainPage = ({ isSignUp }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    const handleSignUp = async () => {
        try {
            await signUp(email, pass);
        } catch (err) {
            setError(err.message)
        }
    }

    const handleSignIn = async () => {
        try {
            await login(email, pass);
        } catch (err) {
            setError(err.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            handleSignUp()
        } else {
            handleSignIn()
        }

        setEmail('');
        setPass('');
    }

    return (
        <>
            <h2>{isSignUp ? "SignUp" : "Login"}</h2>
            <Link to={`${isSignUp ? "/" : "/signup"}`}>
                {!isSignUp ? "SignUp" : "Login"}
            </Link>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={handleChangeEmail} />
                <input type="password" value={pass} onChange={handleChangePass} />
                <button>{!isSignUp ? "LOGIN" : "SIGNUP"}</button>
                {error && <span>{error}</span>}
            </form>
        </>
    )
}