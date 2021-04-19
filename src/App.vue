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
import update from "./mixins/update";

export default {
  components: { Header, Footer },
  name: "App",
  mixins: [update]
};
</script>

<style></style>
