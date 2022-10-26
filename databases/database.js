// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhVIlwehhFSmjJwnbj_sQNyMsBt-KPPow",
  authDomain: "microservice-user-8c969.firebaseapp.com",
  projectId: "microservice-user-8c969",
  storageBucket: "microservice-user-8c969.appspot.com",
  messagingSenderId: "758345944927",
  appId: "1:758345944927:web:9cad8e36ad46f2ccf430ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = { firebase }