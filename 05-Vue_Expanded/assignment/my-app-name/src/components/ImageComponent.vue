<script setup>
import { defineProps } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
    default:
      "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
  },
  alt: {
    type: String,
    required: true,
    default: "default",
  },
  title: {
    type: String,
    required: true,
    default: "Default Image",
  },
});
</script>
<template>
  <img
    :src="props.src"
    class="img-fluid"
    :alt="props.alt"
    :title="props.title"
  />
</template>
