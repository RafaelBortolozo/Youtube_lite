<template>
  <div class="login" v-on:click="googleSignIn()">
    <button>{{ googleText }}</button>
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
          try {
            initializeApp(firebaseConfig)
            const provider = new GoogleAuthProvider()
            const auth = getAuth()
            signInWithPopup(auth, provider).then((result) => {
                //const credential = GoogleAuthProvider.credentialFromResult(result)
                //const token = credential.accessToken
                const user = result.user
                this.googleText = `Bem-vindo ${user.displayName}`
                console.log(user)
                
            }).catch((error) => {
                console.log(error)
          })}catch(err) {
            console.log(err)
          }
      }
  }
};
</script>

<style>
  .login {
    background-color: red;
    border-radius: 50px;
  }
  button {
    border: none;
    padding: 7px;
    border-radius: 50px;
    cursor: pointer;
  }
</style>
