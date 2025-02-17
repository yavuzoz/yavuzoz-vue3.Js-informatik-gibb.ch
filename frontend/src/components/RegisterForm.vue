<template>
    <form @submit.prevent="registerUser">
      <input v-model="name" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="phone" placeholder="Phone" required />
      <button type="submit">Register</button>
    </form>
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
      return { name: "", email: "", phone: "" };
    },
    methods: {
      async registerUser() {
        await axios.post("http://localhost:5000/api/users/register", {
          name: this.name, email: this.email, phone: this.phone
        });
        alert("Registration successful!");
      }
    }
  };
  </script>