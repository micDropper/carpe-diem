<template>
  <div class="cd-about container overflow-auto pt-4">
    <h2 class="font-weight-bold">About CARPE Diem</h2>
    <p class="font-weight-bold">
      CARPE Diem is a modern evidence-based suicide prevention framework with a
      unique and important emphasis on lethal means reduction.
    </p>

    <h4 class="font-weight-bold">Creator</h4>
    <b-card class="border-0 shadow-sm">
      <div class="d-flex align-items-center">
        <b-avatar
          :src="require('../assets/img/JPJamesonProfile.jpeg')"
        ></b-avatar>

        <b-card-text class="ml-3">
          John Paul Jameson, Ph.D.
        </b-card-text>
      </div>

      <div class="d-flex align-items-center">
        <b-avatar class="invisible"></b-avatar>

        <b-card-text class="ml-3">
          <div>
            Creator of CARPE Diem, Licensed Psychologist and Professor of
            Psychology at Appalachian State University.
          </div>
          <div>
            <a
              class="font-weight-bold text-secondary"
              href="mailto:jamesonjp@appstate.edu"
              >jamesonjp@appstate.edu</a
            >
          </div>
        </b-card-text>
      </div>
    </b-card>

    <h4 class="font-weight-bold mt-3">Acknowledgements</h4>
    <b-card class="border-0 shadow-sm mb-3">
      <div class="d-flex align-items-center">
        <b-avatar
          :src="require('../assets/img/EthanHahnProfile.jpg')"
        ></b-avatar>

        <b-card-text class="ml-3">
          Ethan Hahn
        </b-card-text>
      </div>

      <div class="d-flex align-items-center">
        <b-avatar class="invisible"></b-avatar>

        <b-card-text class="ml-3">
          <div>
            For his work developing the CARPE Diem web application.
          </div>
          <div>
            <a
              class="font-weight-bold text-secondary"
              href="mailto:hahnel@appstate.edu"
              >hahnel@appstate.edu</a
            >
          </div>
        </b-card-text>
      </div>
    </b-card>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

.cd-about {
  height: calc(
    100vh - (#{$cd-header-height} + #{$cd-footer-height})
  ) !important;
}
</style>
