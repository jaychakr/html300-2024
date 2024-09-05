<script setup>
// Our other pages can be built as components and imported into our App.vue fule
import { ref, computed } from "vue";
import LandingPage from "./components/LandingPage.vue";
import ImagesPage from "./components/ImagesPage.vue";
import AccordionPage from "./components/AccordionPage.vue";
import GridSystem from "./components/GridSystem.vue";
import VueCSS from "./components/VueCSS.vue";
import InputBox from "./components/InputBox.vue";
import NamedSlotsComponent from "./components/NamedSlotsComponent.vue";
// We can make an object to allow easy lookup from URL style string route and the important component we want it to point to
const routes = {
  "/": LandingPage,
  "/images": ImagesPage,
  "/accordion": AccordionPage,
  "/grid": GridSystem,
  "/css": VueCSS,
  "/input": InputBox,
};
/* Using JavaScript, we can get values from the window object when the hashchange event fires to set the currentPath to the current window location. 
The currentView value is then just a lookup from the object, using the string value of window.location.hash as a key to return the corresponding Vue component. */
const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"];
});
</script>
<!-- the <template> that renders <a> links to the different view paths, and a special <component> that comes from Vue that is configured to
render whichever component we have set to the currentView variable defined in the <script> portion of our App.vue -->
<template>
  <NamedSlotsComponent>
    <template v-slot:header>
      <h1>Header Content</h1>
    </template>
    <a href="#/">Landing Page</a> | <a href="#/images">Images</a> |
    <a href="#/accordion">Accordion</a> | <a href="#/grid">Grid</a> |
    <a href="#/css">Vue CSS</a> | <a href="#/input">Input Box</a>
    <component :is="currentView" />
    <template v-slot:footer>
      <footer>Footer for All Pages</footer>
    </template>
  </NamedSlotsComponent>
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
