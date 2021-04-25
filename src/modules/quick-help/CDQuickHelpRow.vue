<template>
  <div class="d-flex flex-row justify-content-between w-100 py-2">
    <div class="w-50 font-weight-bold mr-2">
      <div class="d-flex align-items-center h-100">
        <slot name="description">
          <!-- SLOT: DESCRIPTION -->
        </slot>
      </div>
    </div>
    <div class="w-50 ml-2">
      <a :href="href">
        <b-button
          class="text-white font-weight-bold w-100 py-sm-3 px-sm-4 rounded-xl"
          ><slot name="btn-text">
            <!-- SLOT: BTN-TEXT -->
          </slot>
          <div class="d-sm-inline h-100 pl-2">
            <slot name="btn-icon">
              <!-- SLOT: BTN-ICON -->
            </slot>
          </div>
        </b-button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CDQuickHelpRow",
  props: {
    href: {
      type: String
    }
  }
};
</script>
