<template>
  <CDLearnSection>
    <template v-slot:heading>
      Encourage Hope
    </template>

    <template v-slot:body>
      I'm encourage content
    </template>
  </CDLearnSection>
</template>

<script>
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "EncourageSection",
  components: { CDLearnSection }
};
</script>
