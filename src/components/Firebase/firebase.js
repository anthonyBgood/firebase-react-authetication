

import app from 'firebase/app'

// for authorizing users
import 'firebase/auth'

// for realtime database
import 'firebase/database'

// as provided by firebase at setup
import {firebaseConfig} from './firebaseConfig'


class Firebase {
  constructor(){
    // Initialize Firebase
    app.initializeApp(firebaseConfig)

    // start authorization  (driven by the import 'firebase/auth')
    this.auth = app.auth()

    // start database (driven by the import 'firebase/database')
    this.db = app.database()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.doPasswordUpdate(password)

  
  // *** User API ***
  // single user info
  user = uid => this.db.ref(`users/${uid}`)
  // all user info
  users = () => this.db.ref('users')

}
export default Firebase 

