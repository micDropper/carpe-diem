<template>
  <div class="cd-about container pt-4">
    <h2 class="font-weight-bold">About CARPE Diem</h2>
    <p class="font-weight-bold">
      CARPE Diem is a modern evidence-based suicide prevention framework with a
      unique and important emphasis on lethal means reduction.
    </p>

    <h4 class="font-weight-bold">Creator</h4>
    <div class="font-weight-bold">Dr. JP Jameson</div>

    <h4 class="font-weight-bold mt-2">Acknowledgements</h4>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

.cd-about {
  height: calc(
    100vh - (#{$cd-header-height} + #{$cd-footer-height})
  ) !important;
}
</style>
