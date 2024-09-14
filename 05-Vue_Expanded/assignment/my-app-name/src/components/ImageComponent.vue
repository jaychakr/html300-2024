<!-- convert the image markup into a separate component in its own file -->
<script setup>
import { defineProps } from "vue";
import borderToggle from "./borderToggle";
// image component should have props for at least the image src, alt, & title attributes, use prop validation
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
// custom directive
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
  <!-- toggle on/off border around the image on click, apply the mixin to the image component -->
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
