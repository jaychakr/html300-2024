<script setup>
import { ref } from "vue";
const attachRed = ref(false);
</script>
<template>
  <p>Click on box to change its color!</p>
  <!-- Create an @click event that toggles a variable called attachRed. Then we bind the class red with the variable attachRed. -->
  <div
    class="demo"
    @click="attachRed = !attachRed"
    v-bind:class="{ red: attachRed }"
  ></div>
  <br />
</template>
<!-- In our CSS we style the demo class to be a box with a green background and a class called red with a red background. -->
<style scoped>
.demo {
  height: 100px;
  width: 100px;
  background-color: green;
  margin: auto;
}
.red {
  background-color: red;
  margin: auto;
}
</style>
