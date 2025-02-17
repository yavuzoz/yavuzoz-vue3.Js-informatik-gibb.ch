<template>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Admin Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
      return { email: "", password: "" };
    },
    methods: {
      async login() {
        const res = await axios.post("http://localhost:5000/api/admin/login", {
          email: this.email, password: this.password
        });
        localStorage.setItem("token", res.data.token);
        this.$router.push("/admin/dashboard");
      }
    }
  };
  </script>
  