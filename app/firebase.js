// import and configure firebase
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCkhW7fMIQH5cQNMuHFTLEfdyz7WszfIqI",
    authDomain: "eesta-f62ff.firebaseapp.com",
    databaseURL: "https://eesta-f62ff.firebaseio.com",
    storageBucket: "eesta-f62ff.appspot.com",
    messagingSenderId: "922839198998"
  };

export const firebaseApp = firebase.initializeApp(config);
