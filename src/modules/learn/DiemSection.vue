<template>
  <CDLearnSection>
    <template #heading>
      <span class="text-secondary"> Diem </span>(Today!)
    </template>

    <template #body>
      <CDCalloutBox>
        Do not put this off until tomorrow - suicidal behavior is unpredictable,
        and tomorrow might be too late.
        <b-icon icon="hourglass-split" class="text-danger" />
      </CDCalloutBox>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">
          Urgency Between Thought and Attempt
        </h3>
        <p>
          Almost half of individuals who survived a suicide attempt and were
          hospitalized reported that less than 10 minutes passed between their
          first current thought about suicide and the actual attempt.
        </p>
      </div>

      <h4 class="font-weight-bold font-italic text-secondary">
        What might prevent you from initiating a CARPE Diem converation?
        <font-awesome-icon icon="search" class="text-xl" />
      </h4>
    </template>
  </CDLearnSection>
</template>

<script>
import CDCalloutBox from "@/components/CDCalloutBox.vue";
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "DiemSection",
  components: {
    CDLearnSection,
    CDCalloutBox
  }
};
</script>
