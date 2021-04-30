<template>
  <div>
    <div class="py-3 d-flex justify-content-between" @click="open = !open">
      <h2 class="cd-learn-section__heading font-weight-bold text-primary m-0">
        <slot name="heading">
          <!-- SLOT: HEADING -->
        </slot>
      </h2>

      <b-icon
        :icon="`triangle${open ? '-fill' : ''}`"
        variant="secondary"
        class="text-2xl bv-no-focus-ring mr-4"
        :class="{ 'cd-learn-section__triangle--open': open }"
        :rotate="open ? 60 : -30"
      />
    </div>
    <b-collapse v-model="open">
      <slot name="body">
        <!-- SLOT: BODY -->
      </slot>
    </b-collapse>

    <hr class="bg-dark m-0" />
  </div>
</template>

<script>
export default {
  name: "CDLearnSection",
  data() {
    return {
      open: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

.cd-learn-section__heading {
  &::first-letter {
    color: $secondary !important;
  }
}

.cd-learn-section__triangle--open {
  margin-right: 1rem !important;
}
</style>
