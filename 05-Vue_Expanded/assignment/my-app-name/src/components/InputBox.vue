<script setup>
import { ref } from "vue";

const text = ref("Hello!");
// Update text.value when an event, such as a user typing in an input field, occurs
function changeText(event) {
  text.value = event.target.value;
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.png"
      width="125"
      height="125"
    />
    <h1>{{ text }}</h1>
    <p>Type into input box to see content change as you type:</p>
    <!-- You introduce an input field in the template, 
     using Vue's directive v-on:input to bind it to a method that updates the text variable dynamically as you type. 
     This illustrates the concept of one-way data binding. -->
    <input v-model="text" @input="changeText" />
    <!-- Next, you enhance the interaction by implementing two-way data binding using the v-model directive, 
     linking the input field directly to the text variable. This setup allows changes in the input field to immediately update the variable, 
     and vice versa, showcasing the power of Vue's two-way data binding .-->
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
