<template>
  <div class="container">
    <b-button @click="toast('b-toaster-bottom-right', true)" class="mb-2"
      >b-toaster-bottom-right</b-button
    >
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    toast(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      });
    }
  }
};
</script>

<style></style>
