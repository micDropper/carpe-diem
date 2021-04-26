<template>
  <div class="cd-app">
    <Header />
    <div>
      <router-view />
    </div>
    <Footer />
    <UpdateToast />
    <LandscapeNotSupportedScreen />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import UpdateToast from "./components/UpdateToast.vue";
import LandscapeNotSupportedScreen from "./views/LandscapeNotSupportedScreen.vue";

export default {
  components: { Header, Footer, UpdateToast, LandscapeNotSupportedScreen },
  name: "App",
  mounted() {
    /**
     * Attempt to lock the orientation to portrait via the drafted (as of April, 2021) ScreenOrientation API,
     * or the deprecated lockOrientation API.
     */
    window.screen.orientation.lock &&
      window.screen.orientation.lock("portrait").catch(e => {
        console.log(e);
      });
    window.screen.lockOrientation && window.screen.lockOrientation("portrait");
  }
};
</script>

<style lang="scss" scoped></style>
