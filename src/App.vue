<template>
  <div>
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },
  name: "App"
};
</script>

<style></style>
