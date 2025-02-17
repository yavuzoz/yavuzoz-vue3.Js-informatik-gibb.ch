<template>
    <div>
      <Navbar />
      <h2>{{ program.title }}</h2>
      <p>{{ program.description }}</p>
      <p>Start Date: {{ program.start_date }}</p>
      <Footer />
    </div>
  </template>
  <script>
  import { useProgramStore } from "../store/programStore";
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";
  export default {
    components: { Navbar, Footer },
    props: ["id"],
    computed: {
      program() {
        return useProgramStore().programs.find(p => p.id === this.id) || {};
      }
    }
  };
  </script>