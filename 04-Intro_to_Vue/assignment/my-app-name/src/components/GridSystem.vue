<script setup>
import { ref } from "vue";
const navLinks = ref(["Home", "Features", "Pricing", "About"]);
</script>
<template>
  <main class="main">
    <div class="container mt-3">
      <div class="row">
        <!-- Menu Section -->
        <nav class="col-xl-3 col-lg-4 col-md-5 col-sm-12 bg-light col-xs-3">
          <h3>Menu</h3>
          <ul class="nav flex-column">
            <!-- v-for to iterate through navLink elements-->
            <li v-for="link in navLinks" :key="link">
              <a class="nav-link" href="#">{{ link }}</a>
            </li>
          </ul>
        </nav>
        <!-- Content Section -->
        <main class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-xs-3">
          <h2>Responsive Content</h2>
          <p>
            Resize the browser window to see the sections rearrange themselves.
          </p>
        </main>
      </div>
    </div>
  </main>
</template>
