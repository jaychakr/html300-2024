<script setup>
import { ref } from "vue";
const attachRed = ref(false);
</script>
<template>
  <p>Click on box to change its color!</p>
  <div
    class="demo"
    @click="attachRed = !attachRed"
    v-bind:class="{ red: attachRed }"
  ></div>
  <br />
</template>
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
