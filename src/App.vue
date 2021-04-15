<template>
  <div class="container">
    <Home />
    <b-toast
      id="update-toast"
      no-auto-hide
      toaster="b-toaster-bottom-right"
      header-class="d-none"
    >
      New content available!
      <b-button @click="refreshApp" variant="primary" size="sm" class="mx-1"
        >Refresh</b-button
      >
    </b-toast>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import update from "./mixins/update";

export default {
  name: "App",
  components: {
    Home
  },
  mixins: [update],
  watch: {
    updateExists: function(newUpdateExists) {
      if (newUpdateExists) {
        this.$bvToast.show("update-toast");
      } else {
        this.$bvToast.hide("update-toast");
      }
    }
  }
};
</script>

<style></style>
