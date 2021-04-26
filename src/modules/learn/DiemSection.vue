<template>
  <CDLearnSection>
    <template #heading>
      <span class="text-secondary"> Diem </span>(Today!)
    </template>

    <template #body>
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
