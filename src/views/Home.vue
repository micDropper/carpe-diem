<template>
  <div class="cd-home">
    <div class="cd-home__top position-relative">
      <YellowWavyBackground
        class="cd-home__yellow-background clamp-viewport-x position-absolute h-75"
      />

      <SittingPerson class="cd-home__sitting-person h-100 w-100" />
    </div>

    <div
      class="cd-home__bottom overflow-auto d-flex justify-content-center align-items-center w-100"
    >
      <div
        class="cd-home__bottom__content d-flex flex-column align-items-center justify-content-start h-100"
      >
        <div class="text-dark font-weight-bold text-center px-4 mb-1">
          Are you concerned about yourself or someone else?
        </div>

        <div class="d-flex justify-content-between w-100 mb-1">
          <b-button
            variant="primary"
            class="text-white rounded-xl w-100 mr-2 py-3"
          >
            Myself
          </b-button>
          <b-button
            variant="primary"
            class="text-white rounded-xl w-100 ml-2 py-3"
          >
            Someone Else
          </b-button>
        </div>

        <div class="text-dark font-weight-bold text-center px-4">
          I'm just here to learn
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SittingPerson from "../components/svg-wrappers/SittingPerson";
import YellowWavyBackground from "../components/svg-wrappers/YellowWavyBackground.vue";

export default {
  name: "Home",
  components: {
    SittingPerson,
    YellowWavyBackground
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index";

.cd-home {
  height: calc(
    100vh - (#{$cd-header-height} + #{$cd-footer-height})
  ) !important;

  .cd-home__top {
    height: 50% !important;

    .cd-home__sitting-person {
      z-index: 2 !important;
    }

    .cd-home__yellow-background {
      z-index: -1 !important;
    }

    @include media-breakpoint-up(sm) {
      height: 60% !important;
    }
  }

  .cd-home__bottom {
    height: 50% !important;

    @include media-breakpoint-up(sm) {
      height: 40% !important;
      .cd-home__bottom__content {
        width: 30rem !important;
      }
    }
  }
}
</style>
