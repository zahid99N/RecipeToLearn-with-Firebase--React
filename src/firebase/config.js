import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQp9jKyMzZGMyjYEGp6mddVTahNkmZDa0",
    authDomain: "coking-recipes.firebaseapp.com",
    projectId: "coking-recipes",
    storageBucket: "coking-recipes.appspot.com",
    messagingSenderId: "634757076011",
    appId: "1:634757076011:web:ea95cf639a12ee05b0466e"
};

firebase.initializeApp(firebaseConfig)
// init services
const projectFirestore = firebase.firestore()

export{ projectFirestore }