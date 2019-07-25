import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyDyBOYKPOIVkVBPO0n8-sAy3IQUI1PzSBU",
    authDomain: "mvpbucket.firebaseapp.com",
    databaseURL: "https://mvpbucket.firebaseio.com",
    projectId: "mvpbucket",
    storageBucket: "mvpbucket.appspot.com",
    messagingSenderId: "393398115869",
    appId: "1:393398115869:web:f9a6b9fe0fe07150"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export default {
    storage, firebase
}