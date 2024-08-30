<script setup>
import { ref, computed } from "vue";
import LandingPage from "./components/LandingPage.vue";
import ImagesPage from "./components/ImagesPage.vue";
import AccordionPage from "./components/AccordionPage.vue";
import GridSystem from "./components/GridSystem.vue";
const routes = {
  "/": LandingPage,
  "/images": ImagesPage,
  "/accordion": AccordionPage,
  "/grid": GridSystem,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"];
});
</script>

<template>
  <a href="#/">Landing Page</a> | <a href="#/images">Images</a> |
  <a href="#/accordion">Accordion</a> | <a href="#/grid">Grid</a>
  <component :is="currentView" />
  <footer>Footer for All Pages</footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
