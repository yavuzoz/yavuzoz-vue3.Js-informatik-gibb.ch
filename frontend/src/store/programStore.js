import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useProgramStore = defineStore("programStore", () => {
  const programs = ref([]);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/programs");
      programs.value = res.data;
    } catch (error) {
      console.error("Error fetching programs", error);
    }
  };

  return { programs, fetchPrograms };
});
