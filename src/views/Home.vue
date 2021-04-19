<template>
  <div class="cd-home">
    <div class="cd-home__top w-100">
      <div class="cd-home__yellow-background position-absolute">
        <YellowWavyBackground class="vw-100" />
      </div>

      <SittingPerson class="cd-home__sitting-person w-100" />
    </div>

    <div class="cd-home__bottom w-100">
      <div class="d-flex flex-column align-items-center my-3">
        <div
          class="font-size-lg text-dark font-weight-bold text-center px-4 my-3"
        >
          Are you concerned about yourself or someone else?
        </div>

        <div class="d-flex justify-content-between w-100 my-3">
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

        <div
          class="font-size-lg text-dark font-weight-bold text-center px-4 my-3"
        >
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
    height: 60% !important;
  }

  .cd-home__bottom {
    height: 40% !important;
  }
}

.cd-home__sitting-person {
  z-index: 2 !important;
  margin-top: 5.2rem;

  height: 20rem;
}

.cd-home__yellow-background {
  z-index: -1 !important;
  left: 0;
}
</style>
