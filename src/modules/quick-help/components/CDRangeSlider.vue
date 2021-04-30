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
    <div class="cd-range__cover-left"></div>
    <div class="cd-range__cover-right"></div>

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
        "--advanceWithheld": `${(this.percentAdvanced / 100) * 1}rem`
      };
    },

    percentAdvanced() {
      return Math.round((this.value / 3) * 10000) / 100;
    }
  },

  data() {
    return {
      uid: uuid()
    };
  }
};
</script>

<style lang="scss" scoped>
// Cover the left side of the slider to require user to drag. This should prevent
// inadvertently changing the input value if they scroll by on mobile.
.cd-range__cover-left {
  height: 1.4rem;
  width: calc(var(--percentAdvanced) - var(--advanceWithheld));
  left: 0;
  position: absolute;
}

// Cover the right side of the slider to require the user to drag.
.cd-range__cover-right {
  height: 1.4rem;
  width: calc(
    (100% - var(--percentAdvanced)) - (1rem - var(--advanceWithheld))
  );
  right: 0;
  position: absolute;
}
</style>
