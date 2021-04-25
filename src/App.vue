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
  created() {
    window.screen.orientation.lock("portrait").catch(e => {
      console.log(e);
    });
    window.screen.lockOrientation("portrait");
    document.documentElement.requestFullscreen();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

@media screen and (min-width: map-get($grid-breakpoints, "xs")) and (max-width: map-get($grid-breakpoints, "md")) and (orientation: landscape) {
  .cd-app {
    transform: rotate(-90deg) !important;
    transform-origin: left top !important;
    width: 100vh !important;
    height: 100vw !important;
    overflow-x: hidden !important;
    position: absolute !important;
    top: 100% !important;
    left: 0 !important;
  }
}
</style>
