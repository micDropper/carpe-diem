<template>
  <CDLearnSection>
    <template v-slot:heading>
      Connect
    </template>

    <template v-slot:body>
      <CDCalloutBox>
        The C in CARPE Diem stands for connect. There are three important
        aspects to connect: evoke, listen, and respond.
      </CDCalloutBox>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Evoke</h3>
        <p>
          Make the conversation a comfortable place to discuss negative mood and
          emotion. Ask simple, open-ended questions.
        </p>
      </div>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Listen</h3>
        <p>
          Take time to hear the response and notice any risk factors. Respond
          with reflection and empathy, and ask follow-up questions.
        </p>
      </div>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Respond</h3>
        <p>
          Express your concerns and let the person know that you take this
          seriously.
        </p>
      </div>
    </template>
  </CDLearnSection>
</template>

<script>
import CDCalloutBox from "./CDCalloutBox.vue";
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "ConnectSection",
  components: {
    CDLearnSection,
    CDCalloutBox
  }
};
</script>

CDCalloutBox
