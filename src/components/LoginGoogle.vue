<template>
  <div class="login" v-on:click="googleSignIn()">
    <button>{{ textButton }}</button>
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
      textButton: "Fazer login",
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
            this.textButton = `Bem-vindo ${result.user.displayName}`;
            this.loggedState = true
            this.$emit("loginResult", {
              loggedState: this.loggedState,
              loginResult: result
            });
          })
          .catch(() => {
            this.textButton = "Login not worked, try again";
            this.loggedState = false
            this.$emit("loginResult", {
              loggedState: this.loggedState,
            });
          });
      } catch {
        this.textButton = "Login not worked, try again";
        this.loggedState = false
        this.$emit("loginResult", {
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
