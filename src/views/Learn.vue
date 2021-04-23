<template>
  <div class="cd-learn">
    <b-navbar sticky class="cd-learn__top p-0 m-0">
      <div class="cd-learn__top__content position-relative p-0 m-0 w-100">
        <div class="font-weight-bold position-absolute mt-3 w-100">
          <div class="container d-flex">
            <div class="d-flex justify-content-between">
              You're a great friend to help.
            </div>
          </div>
        </div>

        <WavyBackground
          class="cd-learn__background clamp-viewport-x--absolute position-absolute h-75"
          color="#EFFDE7"
        />

        <UmbrellaPerson class="cd-learn__graphic pt-5 h-100 w-100" />
      </div>
    </b-navbar>

    <div class="cd-learn__bottom container bg-white w-100">
      <div class="bg-dark font-weight-bold text-white clamp-viewport-x">
        <div class="container py-3">
          Let's talk about C.A.R.P.E Diem to teach you how to take steps to
          prevent suicide.
        </div>
      </div>

      <div class="d-flex flex-column h-100">
        <div class="font-weight-bold py-3">
          Click on each step to view:
        </div>

        <ConnectSection />
        <AskSection />
        <ReferSection />
        <PlanSection />
        <EncourageSection />
        <DiemSection />
      </div>
    </div>
  </div>
</template>

<script>
import AskSection from "../components/AskSection.vue";
import ConnectSection from "../components/ConnectSection.vue";
import ReferSection from "../components/ReferSection.vue";
import PlanSection from "../components/PlanSection.vue";
import UmbrellaPerson from "../components/svg-wrappers/UmbrellaPerson.vue";
import WavyBackground from "../components/svg-wrappers/WavyBackground.vue";
import EncourageSection from "../components/EncourageSection.vue";
import DiemSection from "../components/DiemSection.vue";

export default {
  name: "Learn",
  components: {
    WavyBackground,
    UmbrellaPerson,
    ConnectSection,
    AskSection,
    ReferSection,
    PlanSection,
    EncourageSection,
    DiemSection
  }
};
</script>

, As, ReferSectionkSection<style s, UmbrellaPersoncoped lang="scss">
@import "~@/assets/styles/index";

.cd-learn {
  min-height: calc(
    100vh - (#{$cd-header-height} + #{$cd-footer-height})
  ) !important;

  .cd-learn__top {
    max-height: 60vh !important;
    top: $cd-header-height !important;
    z-index: -1;

    .cd-learn__top__content {
      height: 60vh !important;
    }

    .cd-learn__graphic {
      z-index: -1 !important;
    }

    .cd-learn__background {
      z-index: -1 !important;
    }

    @include media-breakpoint-up(sm) {
      height: 60% !important;
    }
  }

  .cd-learn__bottom {
    height: fit-content !important;
  }
}
</style>
