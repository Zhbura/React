import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";

const navigate = [
    {
        id: 1,
        to: '/',
        name: 'Main',
    },
    {
        id: 2,
        to: '/profile',
        name: 'Profile',
    },
    {
        id: 3,
        to: '/chats',
        name: 'Chats',
    },
    {
        id: 4,
        to: '/laureates',
        name: 'Laureates',
    },
];

export const Header = () => {


    return (
        <>
            <header>
                <nav>
                    <ul className="header_list">
                        {navigate.map((link) => (
                            <li key={link.id}>
                                <NavLink
                                    to={link.to}
                                    style={({ isActive }) => ({
                                        color: isActive ? 'red' : 'blue'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main><Outlet /></main>
        </>
    )
}