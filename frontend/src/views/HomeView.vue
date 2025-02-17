<template>
  <div>
    <Navbar />
    <h1>Informatik</h1>
    <div>
      <ProgramCard v-for="program in programs" :key="program.id" :program="program" />
    </div>
    <Footer />
  </div>
</template>
<script>
import { useProgramStore } from "../store/programStore";
import ProgramCard from "../components/ProgramCard.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { ProgramCard, Navbar, Footer },
  setup() {
    const programStore = useProgramStore();
    return { programs: programStore.programs };
  }
};
</script>