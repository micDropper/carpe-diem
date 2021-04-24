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

        <CDQuickHelpRow href="sms:741741;?&body=HOME">
          <template #description>
            Crisis Text Line
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
    </template>
  </LongPageLayout>
</template>

<script>
import KneelingPerson from "../components/svg-wrappers/KneelingPerson.vue";
import LongPageLayout from "../components/LongPageLayout.vue";
import CDQuickHelpRow from "../components/CDQuickHelpRow.vue";
export default {
  components: { LongPageLayout, KneelingPerson, CDQuickHelpRow },
  name: "QuickHelp"
};
</script>
