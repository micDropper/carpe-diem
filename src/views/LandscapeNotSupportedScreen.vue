<template>
  <div
    class="cd-landscape-not-supported-screen position-absolute bg-dark text-white"
  >
    <div
      class="d-flex flex-column w-100 h-100 justify-content-center align-items-center"
    >
      <h1>Landscape Not Supported</h1>
      <p class="text-muted">
        Please rotate your device to portrait orientation
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandscapeNotSupportedScreen"
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

.cd-landscape-not-supported-screen {
  width: 0 !important;
  height: 0 !important;
  display: none;

  @media screen and (min-width: map-get($grid-breakpoints, "xs")) and (max-width: map-get($grid-breakpoints, "md")) and (orientation: landscape) {
    display: block;
    z-index: 1080 !important;
    width: 100vw !important;
    height: 100vh !important;
    position: fixed !important;
    top: 0;
    left: 0;
  }
}
</style>
