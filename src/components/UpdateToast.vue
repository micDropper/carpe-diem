<template>
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
</template>

<script>
import update from "../mixins/update";

export default {
  name: "UpdateToast",
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
