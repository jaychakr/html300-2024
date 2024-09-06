import { ref } from "vue";
export default function borderToggle() {
  const border = ref(false);
  const toggle = () => (border.value = !border.value);
  return {
    border,
    toggle,
  };
}
