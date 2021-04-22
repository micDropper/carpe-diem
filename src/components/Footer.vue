<template>
  <footer class="cd-footer font-weight-bold text-white bg-dark w-100 px-4">
    <div
      class="d-flex align-items-center h-100"
      @click="$router.push({ name: 'About' })"
    >
      About CARPE Diem
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

.cd-footer {
  height: $cd-footer-height;
}
</style>
