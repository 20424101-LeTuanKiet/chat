import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDN7LfdP_xVKc_8-I0IQA4v2M8K2azH1No',
    authDomain: 'chat-a499c.firebaseapp.com',
    projectId: 'chat-a499c',
    storageBucket: 'chat-a499c.appspot.com',
    messagingSenderId: '373841458290',
    appId: '1:373841458290:web:8a711d6647d01da5207eeb',
    measurementId: 'G-RZTK5MW0K1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8081');
}

export { db, auth };
export default firebase;
