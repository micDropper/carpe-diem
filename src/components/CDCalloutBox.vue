<template>
  <div class="cd-callout-box border border-secondary p-4 font-weight-bold">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CDCalloutBox"
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/index";

.cd-callout-box {
  background-color: $secondary-lighter;
}
</style>
