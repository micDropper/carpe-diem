<template>
  <b-navbar class="cd-header bg-dark">
    <b-navbar-brand class="cd-header__title text-white">
      <div>
        CARPE Diem
      </div>
      <div class="cd-header__subtitle">Suicide Prevention</div>
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-button variant="light" class="cd-header__help-button">
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
  height: 6rem;

  .cd-header__title {
    font-family: $font-family-site-title;
    font-size: 2rem;
    font-weight: bold;

    .cd-header__subtitle {
      font-size: 1.25rem;
      font-weight: 100;
    }
  }

  .cd-header__help-button {
    border-radius: 0.5rem;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: 800;
  }
}
</style>
