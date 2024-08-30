<script setup>
import { ref } from "vue";
const images = ref([
  {
    src: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "mountains",
  },
  {
    src: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "lake",
  },
  {
    src: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "greenery",
  },
  {
    src: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "river",
  },
]);
</script>
<template>
  <main class="main">
    <br />
    <div v-for="image in images" :key="image.src">
      <img :src="image.src" class="img-fluid" :alt="image.alt" /><br /><br />
    </div>
  </main>
</template>
