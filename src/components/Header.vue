<template>
  <b-navbar class="cd-header bg-dark px-4">
    <b-navbar-brand class="cd-header__title text-3xl text-white">
      <div>
        CARPE Diem
      </div>
      <div class="cd-header__subtitle text-xl">Suicide Prevention</div>
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-button
        variant="light"
        class="cd-header__help-button text-base rounded-xl"
      >
        QUICK HELP
      </b-button>
    </b-navbar-nav>
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

    .cd-header__subtitle {
      font-weight: 100;
    }
  }

  .cd-header__help-button {
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: 800;
  }
}
</style>
