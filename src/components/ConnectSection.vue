<template>
  <CDLearnSection>
    <template v-slot:heading>
      Connect
    </template>

    <template v-slot:body>
      I'm Connect content
    </template>
  </CDLearnSection>
</template>

<script>
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "ConnectSection",
  components: { CDLearnSection }
};
</script>
