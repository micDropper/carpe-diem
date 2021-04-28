<template>
  <CDLearnSection>
    <template #heading>
      Connect
    </template>

    <template #body>
      <CDCalloutBox>
        The C in CARPE Diem stands for connect. There are three important
        aspects to connect: evoke, listen, and respond.
      </CDCalloutBox>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Evoke</h3>
        <p>
          Make the conversation a comfortable place to discuss negative mood and
          emotion. Ask simple, open-ended questions.
          <font-awesome-icon :icon="['far', 'smile']" class="text-xl" />
        </p>
        <ul>
          <li class="font-italic">How have you been feeling?</li>
        </ul>
      </div>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Listen</h3>
        <p>
          Take time to hear the response and notice any risk factors. Respond
          with reflection and empathy, and ask follow-up questions.
        </p>

        <ul>
          <li class="font-italic">
            I'm sorry to hear that you've been down. How long have you been
            feeling like this?
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Respond</h3>
        <p>
          Express your concerns and let the person know that you take this
          seriously.
          <font-awesome-icon icon="hard-hat" class="text-xl align-text-top" />
        </p>

        <ul>
          <li class="font-italic">
            I'm worried about you and I want to help. This is serious business.
            You might think that no one cares, but that's not true.
          </li>
        </ul>
      </div>
    </template>
  </CDLearnSection>
</template>

<script>
import CDCalloutBox from "@/components/CDCalloutBox.vue";
import CDLearnSection from "./CDLearnSection.vue";
export default {
  name: "ConnectSection",
  components: {
    CDLearnSection,
    CDCalloutBox
  }
};
</script>
