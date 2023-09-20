import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbgO0LgWDZL0XOkJVqpDcN3xYIef8aYqo",
  authDomain: "fir-d9d59.firebaseapp.com",
  projectId: "fir-d9d59",
  storageBucket: "fir-d9d59.appspot.com",
  messagingSenderId: "357224572875",
  appId: "1:357224572875:web:c7c44c2ce0989df1e1b84e",
  measurementId: "G-DKXDTMEFNS"
};

export default firebase.initializeApp(firebaseConfig)