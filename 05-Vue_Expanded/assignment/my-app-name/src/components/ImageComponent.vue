<script setup>
import { defineProps } from "vue";
import borderToggle from "./borderToggle";
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
const vOpacity = {
  mounted(el, binding) {
    el.style.opacity = binding.value;
  },
};
</script>
<script>
export default {
  mixins: [borderToggle],
};
</script>
<template>
  <img
    v-if="border"
    :src="props.src"
    class="img-fluid"
    :alt="props.alt"
    :title="props.title"
    @click="toggle"
    style="border: 3px solid black"
    v-opacity="0.75"
  />
  <img
    v-else
    :src="props.src"
    class="img-fluid"
    :alt="props.alt"
    :title="props.title"
    @click="toggle"
  />
</template>
