<template>
  <div
    v-b-tooltip="{
      title: 'Drag the thumb',
      placement: 'bottom',
      variant: 'secondary',
      trigger: 'hover',
      boundaryPadding: '0'
    }"
    title="Drag the thumb"
    class="position-relative w-100"
    :style="cssVars"
  >
    <div class="cd-range__cover-left position-absolute rounded-r-full"></div>
    <div class="cd-range__cover-right position-absolute rounded-l-full"></div>

    <b-form-input
      :id="uid"
      type="range"
      v-model="_model"
      :min="min"
      :max="max"
    />
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  name: "CDRangeSlider",

  props: {
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 3
    },
    value: null
  },

  computed: {
    _model: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      }
    },

    cssVars() {
      return {
        "--percentAdvanced": `${this.percentAdvanced}%`,
        "--advanceWithheld": `${(this.percentAdvanced / 100) *
          this.thumbDiameter}rem`,
        "--thumbDiameter": `${this.thumbDiameter}rem`,
        "--rangeHeight": `${this.thumbDiameter + 0.4}rem`
      };
    },

    percentAdvanced() {
      return Math.round((this.value / 3) * 10000) / 100;
    }
  },

  data() {
    return {
      uid: uuid(),
      // Diameter of the thumb handle in rem units.
      // Corresponds with $custom-range-thumb-width from bootstrap _variables.scss
      thumbDiameter: 2
    };
  }
};
</script>

<style lang="scss" scoped>
// Cover the left side of the slider to require user to drag. This should prevent
// inadvertently changing the input value if they scroll by on mobile.
.cd-range__cover-left {
  height: var(--rangeHeight);
  width: calc(var(--percentAdvanced) - var(--advanceWithheld));
  left: 0;
}

// Cover the right side of the slider to require the user to drag.
.cd-range__cover-right {
  height: var(--rangeHeight);
  width: calc(
    (100% - var(--percentAdvanced)) -
      (var(--thumbDiameter) - var(--advanceWithheld))
  );
  right: 0;
}
</style>
