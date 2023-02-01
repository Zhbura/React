import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Profile } from './components/Profile/Profile';
import { Chat } from './components/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';
import { Provider } from 'react-redux';
import { store } from './store';

export function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats" element={<ChatList />}>
              <Route path=":chatId" element={<Chat />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>ERROR 404, PAGE NOT FOUND</h1>}></Route>
        </Routes>
      </Provider>
    </>
  )
}