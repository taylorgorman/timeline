import firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
})

const signOut = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

const authChange = ( callback ) => {
  firebase.auth().onAuthStateChanged( callback )
}

const firebaseUiAuth = new firebaseui.auth.AuthUI( firebase.auth() )

export {
  signOut,
  authChange,
  firebaseUiAuth,
}
