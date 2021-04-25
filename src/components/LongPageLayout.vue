<template>
  <div class="cd-long-page-layout">
    <b-navbar sticky class="cd-long-page-layout__top p-0 m-0">
      <div
        class="cd-long-page-layout__top__content position-relative p-0 m-0 w-100"
      >
        <div class="font-weight-bold position-absolute mt-3 w-100">
          <div class="container d-flex">
            <div class="d-flex justify-content-between">
              <slot name="graphic-comment">
                <!-- SLOT: GRAPHIC-COMMENT -->
                I AM A GRAPHIC COMMENT
              </slot>
            </div>
          </div>
        </div>

        <WavyBackground
          class="z-background clamp-viewport-x--absolute position-absolute h-75"
          :color="waveBackgroundColor"
        />
        <div
          :style="cssVars"
          class="cd-long-page-layout__top__fade-container z-background clamp-viewport-x--absolute position-absolute"
        />
        <slot name="graphic">
          <!-- SLOT: GRAPHIC -->
          <KneelingPerson class="z-background h-100 w-100" />
        </slot>
      </div>
    </b-navbar>

    <div class="cd-long-page-layout__bottom w-100 ">
      <div
        class="bg-dark font-weight-bold text-white clamp-viewport-x rounded-t-xl shadow"
      >
        <div class="position-relative container py-4">
          <slot name="body-heading">
            <!-- SLOT: BODY-HEADING -->
            I AM A BODY HEADING
          </slot>
          <div
            class="cd-long-page-layout__bottom__tab-indicator position-absolute bg-white rounded-pill"
          ></div>
        </div>
      </div>
      <div class="bg-white">
        <div class="container">
          <slot name="body">
            <!-- SLOT: BODY -->
            I AM BODY CONTENT
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KneelingPerson from "./svg-wrappers/KneelingPerson.vue";
import WavyBackground from "./svg-wrappers/WavyBackground.vue";

export default {
  name: "LongPageLayout",
  components: {
    WavyBackground,
    KneelingPerson
  },
  props: {
    waveBackgroundColor: {
      type: String,
      default: "#E7FDEF"
    }
  },
  computed: {
    cssVars() {
      return {
        "--opacity": this.opacity
      };
    }
  },
  data() {
    return {
      opacity: 0
    };
  },
  methods: {
    setOpacity() {
      this.opacity = Math.min(
        Math.round((window.scrollY / window.visualViewport.height) * 100) / 100,
        1
      );
    }
  },
  mounted() {
    document.addEventListener("scroll", () => {
      this.setOpacity();
    });
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index";

.cd-long-page-layout {
  min-height: calc(
    100vh - (#{$cd-header-height} + #{$cd-footer-height})
  ) !important;

  // Enforce portrait mode on small devices
  @media screen and (min-width: map-get($grid-breakpoints, "xs")) and (max-width: map-get($grid-breakpoints, "md")) and (orientation: landscape) {
    min-height: calc(
      100vw - (#{$cd-header-height} + #{$cd-footer-height})
    ) !important;
  }

  .cd-long-page-layout__top {
    max-height: 50vh !important;

    // Enforce portrait mode on small devices
    @media screen and (min-width: map-get($grid-breakpoints, "xs")) and (max-width: map-get($grid-breakpoints, "md")) and (orientation: landscape) {
      max-height: 50vw !important;
    }

    top: $cd-header-height !important;
    z-index: -1;

    .cd-long-page-layout__top__content {
      height: 50vh !important;

      // Enforce portrait mode on small devices
      @media screen and (min-width: map-get($grid-breakpoints, "xs")) and (max-width: map-get($grid-breakpoints, "md")) and (orientation: landscape) {
        height: 50vw !important;
      }
    }

    .cd-long-page-layout__top__fade-container {
      background-color: rgba($dark, var(--opacity));
      z-index: 1000 !important;
      height: 110% !important;
    }

    @include media-breakpoint-up(sm) {
      height: 60% !important;
    }
  }

  .cd-long-page-layout__bottom {
    height: fit-content !important;

    .cd-long-page-layout__bottom__tab-indicator {
      width: 3rem;
      height: 4px;
      top: 0.5rem;
      left: calc(50% - 1.5rem);
    }
  }
}
</style>
