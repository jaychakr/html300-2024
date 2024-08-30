<script setup>
import { ref } from "vue";
const show = ref(true);
</script>
<template>
  <main class="main">
    <br />
    <p>
      Click on one of the hyperlinks above to see a demonstration of Vue router
    </p>
    <p>
      Each link above routes to a .vue file containing script, template, and
      style
    </p>
    <p><button @click="show = !show">Toggle paragraph visibility</button></p>
    <p v-if="show">Can you see me?</p>
    <p v-else>Flying away!</p>
    <img
      v-if="show"
      src="https://t3.ftcdn.net/jpg/00/36/83/88/360_F_36838861_UHfFCcgipUy5Orup7vniss11Ly3OLsgf.jpg"
      class="img-fluid"
      alt="bird landing"
    />
    <img
      v-else
      src="https://us.123rf.com/450wm/hermandesign2015/hermandesign20151512/hermandesign2015151200304/49057308-illustration-of-happy-flying-bird.jpg"
      class="img-fluid"
      alt="bird flying"
    /><br /><br />
  </main>
</template>
