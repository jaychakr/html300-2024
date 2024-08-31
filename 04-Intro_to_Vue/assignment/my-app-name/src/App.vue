<script setup>
import { ref, computed } from "vue";
import LandingPage from "./components/LandingPage.vue";
import ImagesPage from "./components/ImagesPage.vue";
import AccordionPage from "./components/AccordionPage.vue";
import GridSystem from "./components/GridSystem.vue";
import VueCSS from "./components/VueCSS.vue";
import InputBox from "./components/InputBox.vue";
const routes = {
  "/landing": LandingPage,
  "/images": ImagesPage,
  "/accordion": AccordionPage,
  "/grid": GridSystem,
  "/css": VueCSS,
  "/input": InputBox,
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
  <a href="#/landing">Landing Page</a> | <a href="#/images">Images</a> |
  <a href="#/accordion">Accordion</a> | <a href="#/grid">Grid</a> |
  <a href="#/css">Vue CSS</a> | <a href="#/input">Input Box</a>
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
