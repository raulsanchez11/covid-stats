import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_F_API_KEY,
  authDomain: process.env.REACT_APP_F_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_F_PROJECT_ID,
  appId: process.env.REACT_APP_F_APP_ID,
}

export default {
  init() {
    firebase.initializeApp(firebaseConfig)
  },

  sigin(email, pass) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        console.log('🚀 ~ sigin ~ user', user)
        localStorage.setItem('user', {
          id: user.uid,
          email: user.email,
          token: user.refreshToken,
        })
        return true
      })
      .catch((error) => {
        console.log('🚀 ~ sigin ~ error', error)
        return false
      })
  },

  isLoggedIn() {
    return !!firebase.auth().currentUser
  },
}
