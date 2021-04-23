<template>
  <CDLearnSection>
    <template v-slot:heading>
      <span class="text-secondary"> Diem </span>(Today!)
    </template>

    <template v-slot:body>
      I'm diem content
    </template>
  </CDLearnSection>
</template>

<script>
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "DiemSection",
  components: { CDLearnSection }
};
</script>
