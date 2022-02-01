<template>
  <div class="login" v-on:click="googleSignIn()">
    <button>{{ googleText }}</button>
  </div>
</template>

<script>
import firebaseConfig from "../scripts/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  name: "LoginGoogle",
  data() {
    return {
      googleText: "Fazer login",
      loggedState: false,
    };
  },
  methods: {
    googleSignIn: function () {
      try {
        initializeApp(firebaseConfig);
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            this.googleText = `Bem-vindo ${result.user.displayName}`;
            this.loggedState = true
            this.$emit("loggedState", {
              loggedState: this.loggedState
            });
          })
          .catch(() => {
            this.googleText = "Login not worked, try again";
            this.loggedState = false
            this.$emit("loggedState", {
              loggedState: this.loggedState,
            });
          });
      } catch {
        this.googleText = "Login not worked, try again";
        this.loggedState = false
        this.$emit("loggedState", {
          loggedState: this.loggedState,
        });
      }
    },
  },
};
</script>

<style>
.login {
  border-radius: 50px;
}
button {
  border: none;
  padding: 7px;
  border-radius: 50px;
  cursor: pointer;
}
</style>
