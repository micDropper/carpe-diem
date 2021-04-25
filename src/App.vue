<template>
  <div class="cd-app">
    <Header />
    <div>
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
  name: "App",
  mounted() {
    screen.orientation.lock("portrait-primary").catch(e => {
      console.log(e);
    });
  }
};
</script>

<style lang="scss" scoped>
// @media screen and (min-width: 280px) and (max-width: 767px) and (orientation: landscape) {
//   .cd-app {
//     transform: rotate(-90deg) !important;
//     transform-origin: left top !important;
//     width: 100vh !important;
//     height: 100vw !important;
//     overflow-x: hidden !important;
//     position: absolute !important;
//     top: 100% !important;
//     left: 0 !important;
//   }
// }
</style>
