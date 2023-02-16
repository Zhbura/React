import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { Profile } from "./components/Profile/Profile";
import { ChatList } from "./components/ChatList/ChatList";
import { Laureates } from "./components/Laureates/Laureates";
import { Chat } from "./components/Chat/Chat";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./servises/firebase";

export const App = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
    return unsubscribe;
  }, [])

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<PublicRoute authed={authed} />}>
                <Route index element={<MainPage />} />
                <Route path="signup" element={<MainPage isSignUp />} />
              </Route>
              <Route path="laureates" element={<Laureates />} />
              <Route path="profile" element={<PrivateRoute authed={authed} />}>
                <Route index element={<Profile />} />
              </Route>
              <Route path="chats" element={<PrivateRoute authed={authed} />}>
                <Route path="" element={<ChatList />}>
                  <Route path=":chatId" element={<Chat />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<h1>ERROR 404, PAGE NOT FOUND</h1>}></Route>
          </Routes>
        </PersistGate>
      </Provider>
    </>
  )
}