<template>
  <b-navbar sticky class="cd-header bg-dark position-sticky px-4">
    <router-link
      :to="{ name: 'Home' }"
      style="text-decoration: none;"
      class="cd-header__title d-inline text-3xl text-white mr-1"
    >
      <div>
        CARPE Diem
      </div>
      <div class="cd-header__subtitle text-xl">Suicide Prevention</div>
    </router-link>

    <b-button
      variant="light"
      class="cd-header__help-button ml-auto text-base rounded-xl"
      @click="$router.push({ name: 'QuickHelp' })"
    >
      QUICK HELP
    </b-button>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

.cd-header {
  height: $cd-header-height;

  .cd-header__title {
    font-family: $font-family-site-title;
    width: 90%;

    .cd-header__subtitle {
      font-weight: 100;
    }
  }

  .cd-header__help-button {
    height: calc(100% - 1rem) !important;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 800;

    @include media-breakpoint-up(sm) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}
</style>
