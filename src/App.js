import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { Profile } from "./components/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./components/Chat/Chat";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </>
  )
}