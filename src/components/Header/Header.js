import { Outlet, NavLink } from 'react-router-dom';
import './Header.css';

export const navigate = [
    {
        id: 1,
        name: 'Main',
        to: '/'
    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile'
    },
    {
        id: 3,
        name: 'Chat',
        to: '/chats'
    }
]
export function Header() {
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