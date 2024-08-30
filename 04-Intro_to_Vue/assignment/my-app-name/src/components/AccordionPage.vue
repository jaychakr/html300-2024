<script setup>
import { ref } from "vue";
const accordionItems = ref([
  {
    button: "Accordion Item #1",
    body: `<strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.`,
  },
  {
    button: "Accordion Item #2",
    body: `<strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.`,
  },
  {
    button: "Accordion Item #3",
    body: `<strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.`,
  },
]);
</script>
<template>
  <main class="main">
    <br />
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(accordionItem, index) in accordionItems"
        :key="accordionItem.button"
      >
        <h2 class="accordion-header" :id="'heading' + (index + 1)">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + (index + 1)"
            aria-expanded="true"
            :aria-controls="'collapse' + (index + 1)"
          >
            {{ accordionItem.button }}
          </button>
        </h2>
        <div
          :id="'collapse' + (index + 1)"
          class="accordion-collapse collapse show"
          :aria-labelledby="'heading' + (index + 1)"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body" v-html="accordionItem.body"></div>
        </div>
      </div>
    </div>
    <br />
  </main>
</template>
