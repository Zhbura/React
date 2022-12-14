import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage';
import { ChatPage } from './pages/ChatPage';

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="chats" element={<ChatPage />}></Route>
        </Route>
        <Route path="*" element={<h1>ERROR 404, PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </>
  )
}