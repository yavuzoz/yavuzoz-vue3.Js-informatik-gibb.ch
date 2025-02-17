<template>
    <div class="p-4 bg-gray-800 m-2 rounded-lg">
      <h3>{{ program.title }}</h3>
      <p>{{ program.description }}</p>
      <router-link :to="'/program/' + program.id">Details</router-link>
    </div>
  </template>
  <script>
  export default {
    props: ["program"]
  };
  </script>
  
