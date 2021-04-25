<template>
  <CDLearnSection>
    <template v-slot:heading>
      Refer
    </template>

    <template v-slot:body>
      I'm refer content
    </template>
  </CDLearnSection>
</template>

<script>
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "ReferSection",
  components: { CDLearnSection }
};
</script>
