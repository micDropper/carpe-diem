<template>
  <CDLearnSection>
    <template #heading>
      Encourage Hope
    </template>

    <template #body>
      <CDCalloutBox>
        Remind them that you genuinely care.
        <font-awesome-icon :icon="['far', 'smile']" class="text-lg" />
      </CDCalloutBox>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Review Plans</h3>
        <p>
          Writing down agreed-upon steps for referral and means reduction can be
          helpful. <font-awesome-icon icon="edit" class="text-xl" />
        </p>
      </div>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">
          Reinforce Their Willingness
        </h3>
        <p>
          Reinforce any steps the individual is willing to take to prevent
          suicide.
        </p>
        <b-alert
          show
          variant="success"
          class="text-center font-italic rounded-xl"
          >I know things are not great right now, but I’m so glad that you are
          willing to take these steps to try to make things better.</b-alert
        >
      </div>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">
          Plan for Follow-Up if Appropriate
        </h3>
        <p>
          Offer a time to check-in with them again, or brainstorm check-ins with
          a willing and caring contact person.
        </p>
      </div>
    </template>
  </CDLearnSection>
</template>

<script>
import CDCalloutBox from "@/components/CDCalloutBox.vue";
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "EncourageSection",
  components: {
    CDLearnSection,
    CDCalloutBox
  }
};
</script>
