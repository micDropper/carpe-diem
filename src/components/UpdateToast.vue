<template>
  <b-toast
    id="update-toast"
    no-auto-hide
    toaster="b-toaster-bottom-right"
    header-class="d-none"
    solid
  >
    <div class="d-flex align-items-center">
      New content available!
      <b-button
        @click="refreshApp"
        variant="success"
        size="sm"
        class="text-white rounded-xl px-3 py-2 ml-2"
        >Refresh</b-button
      >
      <b-button-close
        @click="$bvToast.hide('update-toast')"
        class="pl-3 pr-2
      py-2 mr-n2"
      />
    </div>
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

<style lang="scss" scoped></style>
