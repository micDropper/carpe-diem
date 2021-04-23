<template>
  <div class="cd-home container">
    <div class="cd-home__top position-relative">
      <div class="font-weight-bold position-absolute w-100 mt-4">
        <div class=" d-flex justify-content-center">
          <div class="cd-home__top__greeting">
            We're glad you're here...
          </div>
        </div>
      </div>

      <WavyBackground
        class="cd-home__background clamp-viewport-x--absolute position-absolute h-75"
      />

      <SittingPerson class="cd-home__graphic h-100 w-100" />
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
            class="font-weight-bold text-white rounded-xl w-100 mr-2 py-3"
          >
            Myself
          </b-button>
          <router-link :to="{ name: 'Learn' }" class="w-100 ml-2 ">
            <b-button class="font-weight-bold text-white rounded-xl w-100 py-3">
              Someone Else
            </b-button>
          </router-link>
        </div>

        <router-link
          :to="{ name: 'Learn' }"
          class="text-secondary font-weight-bold text-center px-4"
        >
          I'm just here to learn
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SittingPerson from "../components/svg-wrappers/SittingPerson";
import WavyBackground from "../components/svg-wrappers/WavyBackground.vue";

export default {
  name: "Home",
  components: {
    SittingPerson,
    WavyBackground
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

    .cd-home__top__greeting {
      width: 100% !important;

      @include media-breakpoint-up(sm) {
        width: 30rem !important;
      }
    }

    .cd-home__graphic {
      z-index: 2 !important;
    }

    .cd-home__background {
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
