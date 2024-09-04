<script setup>
import { ref } from "vue";
import ImageComponent from "./ImageComponent.vue";
// Array of images
const images = ref([
  {
    src: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "mountains",
    title: "Lake and Mountains"
  },
  {
    src: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "lake",
    title: "House on Lake"
  },
  {
    src: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "greenery",
    title: "Sunlight on Mountains"
  },
  {
    src: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "river",
    title: "River in Forest"
  },
]);
</script>
<template>
  <main class="main">
    <br />
    <!-- v-for to iterate through images-->
    <div v-for="image in images" :key="image.src">
      <!--<img :src="image.src" class="img-fluid" :alt="image.alt" /><br /><br />-->
      <ImageComponent :src="image.src" :alt="image.alt" :title="image.title"/><br /><br />
    </div>
  </main>
</template>
