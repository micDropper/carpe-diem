<template>
  <LongPageLayout waveBackgroundColor="#EFFDE7">
    <template #graphic-comment>
      You're a great friend to help.
    </template>

    <template #graphic>
      <UmbrellaPerson class="z-background pt-5 h-100 w-100" />
    </template>

    <template #body-heading>
      Let's talk about C.A.R.P.E Diem to teach you how to take steps to prevent
      suicide.
    </template>

    <template #body>
      <div class="d-flex flex-column h-100 pt-3 pb-5">
        <div class="font-weight-bold">
          Click on each step to view:
        </div>

        <ConnectSection />
        <AskSection />
        <ReferSection />
        <PlanSection />
        <EncourageSection />
        <DiemSection />
      </div>
    </template>
  </LongPageLayout>
</template>

<script>
import UmbrellaPerson from "../components/svg-wrappers/UmbrellaPerson.vue";
import LongPageLayout from "../components/LongPageLayout.vue";
import AskSection from "../components/AskSection.vue";
import ConnectSection from "../components/ConnectSection.vue";
import ReferSection from "../components/ReferSection.vue";
import PlanSection from "../components/PlanSection.vue";
import EncourageSection from "../components/EncourageSection.vue";
import DiemSection from "../components/DiemSection.vue";

export default {
  components: {
    LongPageLayout,
    UmbrellaPerson,
    ConnectSection,
    AskSection,
    ReferSection,
    PlanSection,
    EncourageSection,
    DiemSection
  },
  name: "Learn"
};
</script>

<style lang="scss" scoped>
// Double-selection increases specificity needed to overcome the child's CSS.
// Bootstrap's CSS uses the !important keyword, so we do too unfortunately
::v-deep .cd-long-page-layout__top.cd-long-page-layout__top {
  max-height: 60vh !important;

  @media screen and (min-width: 280px) and (max-width: 767px) and (orientation: landscape) {
    max-height: 60vw !important;
  }
}

::v-deep
  .cd-long-page-layout__top__content.cd-long-page-layout__top__content.cd-long-page-layout__top__content {
  height: 60vh !important;

  @media screen and (min-width: 280px) and (max-width: 767px) and (orientation: landscape) {
    height: 60vw !important;
  }
}
</style>
