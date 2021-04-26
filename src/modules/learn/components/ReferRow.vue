<template>
  <div class="d-flex pt-3">
    <div class="flex-grow-1 font-weight-bold mr-2">
      <div class="d-flex align-items-center h-100">
        <slot name="description">
          <!-- SLOT: DESCRIPTION -->
        </slot>
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center font-weight-bold"
    >
      <a :href="href">
        <slot name="icon">
          <!-- SLOT: ICON -->
        </slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReferRow",
  props: {
    href: String
  }
};
</script>
