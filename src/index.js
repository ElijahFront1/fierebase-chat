import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDLn9T8vyS30VzQfSb9ScAdeEZLo0sRssg",
    authDomain: "chat-react-ca75c.firebaseapp.com",
    projectId: "chat-react-ca75c",
    storageBucket: "chat-react-ca75c.appspot.com",
    messagingSenderId: "1066285169667",
    appId: "1:1066285169667:web:d430845117382725ee6236",
    measurementId: "G-TVFY7PBWCD"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

