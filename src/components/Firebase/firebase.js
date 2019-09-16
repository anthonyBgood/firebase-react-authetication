

import app from 'firebase/app'
import 'firebase/auth'

import {firebaseConfig} from './firebaseConfig'


class Firebase {
  constructor(){
    // Initialize Firebase
    app.initializeApp(firebaseConfig)

    // start authorisation  (driven by the import 'firebase/auth')
    this.auth = app.auth()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.doPasswordUpdate(password)

  
}
export default Firebase 

