<template>
  <div>
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
    <UpdateToast />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import UpdateToast from "./components/UpdateToast.vue";

export default {
  components: { Header, Footer, UpdateToast },
  name: "App"
};
</script>

<style></style>
