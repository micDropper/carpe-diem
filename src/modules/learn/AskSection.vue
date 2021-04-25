<template>
  <CDLearnSection>
    <template v-slot:heading>
      Ask
    </template>

    <template v-slot:body>
      <CDCalloutBox>
        Ask specifically about suicide. Studies show that asking about suicide
        does not increase someone’s risk.
      </CDCalloutBox>

      <!-- START: DO SECTION -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Do</h3>

        <ul class="pl-4">
          <li>Be specific about what you notice. Use 'I' language.</li>
          <b-alert
            show
            variant="success"
            class="text-center font-italic rounded-xl"
          >
            I’ve noticed that you’ve been quiet lately. How are you feeling?
          </b-alert>
        </ul>

        <ul class="pl-4">
          <li>Express concern.</li>
          <b-alert
            show
            variant="success"
            class="text-center font-italic rounded-xl"
          >
            I’m worried about you.
          </b-alert>
        </ul>

        <ul class="pl-4">
          <li>Ecourage hope.</li>
          <b-alert
            show
            variant="success"
            class="text-center font-italic rounded-xl"
          >
            I know things seem hopeless now, but I think they can improve if we
            give it a chance.
          </b-alert>
        </ul>
      </div>
      <!-- END: DO SECTION -->

      <!-- START: DON'T SECTION -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Don't</h3>

        <ul class="pl-4">
          <li>Do not phrase questions in the negative.</li>
          <b-alert
            show
            variant="danger"
            class="text-center font-italic rounded-xl"
          >
            You aren’t thinking about suicide, are you?
          </b-alert>
        </ul>

        <ul class="pl-4">
          <li>Do not make it about yourself.</li>
          <b-alert
            show
            variant="danger"
            class="text-center font-italic rounded-xl"
          >
            Exercise always makes me feel better.
          </b-alert>
        </ul>

        <ul class="pl-4">
          <li>Do not make the subject ‘you.’</li>
          <b-alert
            show
            variant="danger"
            class="text-center font-italic rounded-xl"
          >
            No wonder you feel bad… all you do is sit around the house all day.
          </b-alert>
        </ul>
      </div>
      <!-- END: DON'T SECTION -->
    </template>
  </CDLearnSection>
</template>

<script>
import CDLearnSection from "./CDLearnSection.vue";
import CDCalloutBox from "@/components/CDCalloutBox.vue";
export default {
  name: "AskSection",
  components: { CDLearnSection, CDCalloutBox }
};
</script>
