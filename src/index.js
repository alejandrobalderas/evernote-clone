import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyCJKQz7bREVhUZC8sVPnpqHeT1k18EcCVs",
  authDomain: "evernote-clone-8fa30.firebaseapp.com",
  databaseURL: "https://evernote-clone-8fa30.firebaseio.com",
  projectId: "evernote-clone-8fa30",
  storageBucket: "evernote-clone-8fa30.appspot.com",
  messagingSenderId: "529093418223",
  appId: "1:529093418223:web:533afc182b01efc3228f1a",
  measurementId: "G-939B8CTV0V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
