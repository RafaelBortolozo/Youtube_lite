<template>
  <div id="login">
      <button @click="googleSignIn">{{googleText}}</button>
  </div>
</template>

<script>
import firebaseConfig from '../scripts/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default {
  name: "LoginGoogle",
  data() {
    return { 
        googleText: "Fazer login" 
    }
  },
  methods: {
      googleSignIn: function() {
          initializeApp(firebaseConfig)
          const provider = new GoogleAuthProvider()
          const auth = getAuth()
          signInWithPopup(auth, provider).then((result) => {
              //const credential = GoogleAuthProvider.credentialFromResult(result)
              //const token = credential.accessToken
              const user = result.user
              this.googleText = user
              
          }).catch((error) => {
              const errorCode = error.code
              const errorMessage = error.message
              const email = error.email
              const credential = GoogleAuthProvider.credentialFromError(error)
              console.log(errorCode, errorMessage, email, credential)
          })
      }
  }
};
</script>
