import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2jFAaAE4FO3uMMaNqTt-lDtnlosxwnnA",
    authDomain: "crwn-db-dec5b.firebaseapp.com",
    databaseURL: "https://crwn-db-dec5b.firebaseio.com",
    projectId: "crwn-db-dec5b",
    storageBucket: "crwn-db-dec5b.appspot.com",
    messagingSenderId: "141914613771",
    appId: "1:141914613771:web:9c56d12d3a55942a01bf0e",
    measurementId: "G-6S11M5HZ4V"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//still going on!
