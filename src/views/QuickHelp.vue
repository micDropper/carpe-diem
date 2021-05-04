<template>
  <LongPageLayout>
    <template #graphic-comment>
      We care about you and we want you to talk to someone right away...
    </template>

    <template #graphic>
      <KneelingPerson class="z-background h-100 w-100" />
    </template>

    <template #body-heading>
      There are several ways that you can talk to someone right now:
    </template>

    <template #body>
      <!-- START: CALL/TEXT -->
      <div class="container">
        <div class="d-flex flex-column py-2 h-100">
          <CDQuickHelpRow href="tel:18002738255">
            <template #description>
              National Suicide Lifeline
            </template>

            <template #btn-text>
              Call hotline
            </template>

            <template #btn-icon>
              <font-awesome-icon icon="phone-alt" class="text-lg" />
            </template>
          </CDQuickHelpRow>

          <CDQuickHelpRow :href="`sms:741741${platformSMSSentinel}body=HOME`">
            <template #description>
              <div>
                <div>Crisis Text Line</div>
                <div class="text-sm text-muted">Text HOME to 741-741</div>
              </div>
            </template>

            <template #btn-text>
              Send text
            </template>

            <template #btn-icon>
              <b-icon icon="chat-left-text-fill" class="text-lg" />
            </template>
          </CDQuickHelpRow>

          <CDQuickHelpRow href="tel:911">
            <template #description>
              911 Emergency
            </template>

            <template #btn-text>
              Call 911
            </template>

            <template #btn-icon>
              <b-icon icon="exclamation-circle-fill" class="text-lg" />
            </template>
          </CDQuickHelpRow>
        </div>
      </div>
      <!-- END: CALL/TEXT -->

      <!-- START: PHQ-9 -->
      <div>
        <div class="container-fluid bg-dark text-white font-weight-bold py-4">
          <div class="container">
            Take this 9-item questionnaire to determine your depression
            severity:
          </div>
        </div>

        <div class="container">
          <CDQuestionnaire />
        </div>
      </div>
      <!-- END: PHQ-9 -->

      <!-- START: SAFETY PLAN -->
      <div v-if="score !== 0">
        <div
          class="container-fluid text-white font-weight-bold py-4"
          :class="`bg-${scoreVariant}`"
        >
          <div class="container">
            {{ planMessage }}
          </div>
        </div>

        <div class="container">
          <div>
            <div class="py-3">
              <p class="font-weight-bold">
                Who is someone you can call that you trust if you begin to feel
                like killing yourself?
              </p>
              <b-input type="number" />
            </div>
          </div>
        </div>
      </div>
      <!-- END: SAFETY PLAN -->
    </template>
  </LongPageLayout>
</template>

<script>
import KneelingPerson from "../components/svg-wrappers/KneelingPerson.vue";
import LongPageLayout from "../components/LongPageLayout.vue";
import CDQuickHelpRow from "../modules/quick-help/CDQuickHelpRow.vue";
import CDQuestionnaire from "../modules/quick-help/CDQuestionnaire.vue";
import platformSmsLogic from "@/mixins/platform-sms-logic";
import { mapGetters } from "vuex";
export default {
  name: "QuickHelp",

  components: {
    LongPageLayout,
    KneelingPerson,
    CDQuickHelpRow,
    CDQuestionnaire
  },

  mixins: [platformSmsLogic],

  computed: {
    ...mapGetters(["score", "planMessage", "scoreVariant"])
  }
};
</script>
