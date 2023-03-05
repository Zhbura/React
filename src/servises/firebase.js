// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtBgkEVLP4fhJFb1Ob7QcHaQj1QF78_EY",
    authDomain: "projectchats-9e9e9.firebaseapp.com",
    projectId: "projectchats-9e9e9",
    storageBucket: "projectchats-9e9e9.appspot.com",
    messagingSenderId: "755714981355",
    appId: "1:755714981355:web:4698f15d3996b19e8dedae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
    createUserWithEmailAndPassword(auth, email, pass);

export const login = (email, pass) =>
    signInWithEmailAndPassword(auth, email, pass);

export const logOut = () => signOut(auth);

export const db = getDatabase(app);

export const getProfileNameRef = (userId) => ref(db, `profile/${userId}/name`);
export const getProfileRefShowName = ref(db, "profile/ShowName");

export const getChatsRef = ref(db, "chats"); // ссылка на все чаты
export const getChatsByIdRef = (chatId) => ref(db, `chats/${chatId}`); // ссылка на отдельный чат 

export const messagesRef = ref(db, "messages"); // ссылка на все сообщения

export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);

export const getMessageListRefByChatId = (chatId) => ref(db, `messages/${chatId}/messageList`); // ссылка на сообщения чата айди 

// export const getMessageRefById = (chatId, msgId) => ref(db, `messages/${chatId}/messageList/${msgId}`);

export const getMessageRefById = (chatId, msgId) => ref(db, `messages/${chatId}/messageList/${msgId}`)

