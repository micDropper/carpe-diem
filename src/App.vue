<template>
  <div class="container">
    <Home />
    <update-toast />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import UpdateToast from "./components/UpdateToast.vue";

export default {
  name: "App",
  components: {
    Home,
    UpdateToast
  }
};
</script>

<style></style>
