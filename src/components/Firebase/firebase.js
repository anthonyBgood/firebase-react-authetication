import {firebaseConfig} from './firebaseConfig'
import app from 'firebase/app'

class Firebase {
  constructor(){
    // Initialize Firebase
    app.initializeApp(firebaseConfig)
  }
}
export default Firebase 

