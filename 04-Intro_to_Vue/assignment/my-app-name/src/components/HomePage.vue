<script setup>
import { ref } from "vue";

const name = ref("home");
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Welcome to the {{ name }} Page!</h2>
    <p>This is a basic home component.</p>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 20px;
}
</style>