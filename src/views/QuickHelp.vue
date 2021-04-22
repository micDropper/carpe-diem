<template>
  <div class="cd-help">
    <b-navbar sticky class="cd-help__top p-0 m-0">
      <div class="cd-help__top__content position-relative p-0 m-0 w-100">
        <div class="font-weight-bold position-absolute mt-3 w-100">
          <div class="container d-flex">
            <div class="d-flex justify-content-between">
              We care about you and we want you to talk to someone right away...
            </div>
          </div>
        </div>

        <WavyBackground
          class="cd-help__background clamp-viewport-x--absolute position-absolute h-75"
          color="#E7FDEF"
        />

        <KneelingPerson class="cd-help__graphic h-100 w-100" />
      </div>
    </b-navbar>

    <div class="cd-help__bottom container bg-white w-100">
      <div class="bg-dark font-weight-bold text-white clamp-viewport-x">
        <div class="container py-3">
          There are several ways that you can talk to someone right now:
        </div>
      </div>

      <div class="d-flex flex-column h-100">
        <div class="d-flex flex-row justify-content-between w-100 pt-3">
          <div class="w-50 font-weight-bold mr-2">
            <div class="d-flex align-items-center h-100">
              National Suicide Lifeline
            </div>
          </div>
          <div class="w-50 ml-2">
            <b-button
              class="text-white font-weight-bold w-100 py-3 px-4 rounded-xl"
              >Call hotline</b-button
            >
          </div>
        </div>

        <div class="d-flex flex-row justify-content-between w-100 pt-3">
          <div class="w-50 font-weight-bold mr-2">
            <div class="d-flex align-items-center h-100">
              Crisis Text Line
            </div>
          </div>
          <div class="w-50 ml-2">
            <b-button
              class="text-white font-weight-bold w-100 py-3 px-4 rounded-xl"
              >Send text</b-button
            >
          </div>
        </div>

        <div class="d-flex flex-row justify-content-between w-100 py-3">
          <div class="w-50 font-weight-bold mr-2">
            <div class="d-flex align-items-center h-100">
              911 Emergency
            </div>
          </div>
          <div class="w-50 ml-2">
            <b-button
              class="text-white font-weight-bold w-100 py-3 px-4 rounded-xl"
              >Call 911</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KneelingPerson from "../components/svg-wrappers/KneelingPerson.vue";
import WavyBackground from "../components/svg-wrappers/WavyBackground.vue";

export default {
  name: "QuickHelp",
  components: {
    WavyBackground,
    KneelingPerson
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index";

.cd-help {
  min-height: calc(
    100vh - (#{$cd-header-height} + #{$cd-footer-height})
  ) !important;

  .cd-help__top {
    max-height: 50vh !important;
    top: $cd-header-height !important;
    z-index: -1;

    .cd-help__top__content {
      height: 50vh !important;
    }

    .cd-help__graphic {
      z-index: -1 !important;
    }

    .cd-help__background {
      z-index: -1 !important;
    }

    @include media-breakpoint-up(sm) {
      height: 60% !important;
    }
  }

  .cd-help__bottom {
    height: fit-content !important;
  }
}
</style>
