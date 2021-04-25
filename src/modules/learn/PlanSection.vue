<template>
  <CDLearnSection>
    <template v-slot:heading>
      Plan for Safety
    </template>

    <template v-slot:body>
      I'm plan content
    </template>
  </CDLearnSection>
</template>

<script>
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "PlanSection",
  components: { CDLearnSection }
};
</script>
