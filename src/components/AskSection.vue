<template>
  <CDLearnSection>
    <template v-slot:heading>
      Ask
    </template>

    <template v-slot:body>
      I'm ask content
    </template>
  </CDLearnSection>
</template>

<script>
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "AskSection",
  components: { CDLearnSection }
};
</script>
