<template>
  <div>
    <h2 class="cd-learn-section__heading font-weight-bold text-primary">
      <slot name="heading">
        <!-- SLOT: HEADING -->
      </slot>

      <b-icon
        :icon="`triangle${open ? '-fill' : ''}`"
        variant="secondary"
        class="font-weight-bold text-2xl float-right bv-no-focus-ring"
        :rotate="open ? 60 : -30"
        @click="open = !open"
      />
    </h2>

    <b-collapse v-model="open">
      <slot name="body">
        <!-- SLOT: BODY -->
      </slot>
    </b-collapse>

    <hr />
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
</style>
