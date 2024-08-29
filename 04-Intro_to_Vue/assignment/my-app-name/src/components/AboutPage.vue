<script setup>
import { ref } from "vue";

const name = ref("about");
</script>

<template>
  <div class="about">
    <h1>About</h1>
    <h2>Welcome to the {{ name }} Page!</h2>
    <p>This is a basic {{ name }} component.</p>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  margin-top: 20px;
}
</style>
