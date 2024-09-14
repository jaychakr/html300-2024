// mixin for image component that should toggle on/off border
export default {
  data() {
    return {
      border: false,
    };
  },
  methods: {
    toggle() {
      this.border = !this.border;
    },
  },
};