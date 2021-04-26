<template>
  <CDLearnSection>
    <template #heading>
      Refer
    </template>

    <template #body>
      <CDCalloutBox>
        <div>
          Transition to help by referring them to professional services.
        </div>
        <ReferRow href="tel:18002738255">
          <template #description>
            <div>
              <div>Suicide Prevention Lifeline</div>
              <div class="text-base text-muted">(1-800-273-TALK)</div>
            </div>
          </template>

          <template #icon>
            <font-awesome-icon icon="phone-alt" class="text-3xl" />
          </template>
        </ReferRow>
        <ReferRow :href="`sms:741741${platformSMSSentinel}body=HOME`">
          <template #description>
            <div>
              <div>Crisis Textline</div>
              <div class="text-base text-muted">(Text HOME to 741-741)</div>
            </div>
          </template>

          <template #icon>
            <b-icon icon="chat-left-text-fill" class="text-3xl" />
          </template>
        </ReferRow>
        <ReferRow
          href="https://suicidepreventionlifeline.org/our-crisis-centers/#section-4"
        >
          <template #description>
            <div>
              <div>Local Mental Health Provider</div>
              <div class="text-base text-muted">
                (For high-risk individuals)
              </div>
            </div>
          </template>

          <template #icon>
            <font-awesome-icon icon="map-marked-alt" class="text-3xl" />
          </template>
        </ReferRow>
        <ReferRow href="tel:911">
          <template #description>
            <div>
              <div>Call 911</div>
              <div class="text-base text-muted">
                (For immediate risk)
              </div>
            </div>
          </template>

          <template #icon>
            <b-icon icon="exclamation-circle-fill" class="text-3xl" />
          </template>
        </ReferRow>
      </CDCalloutBox>
    </template>
  </CDLearnSection>
</template>

<script>
import CDCalloutBox from "../../components/CDCalloutBox.vue";
import CDLearnSection from "./CDLearnSection.vue";
import ReferRow from "./components/ReferRow.vue";
import platformSmsLogic from "@/mixins/platform-sms-logic";

export default {
  name: "ReferSection",
  components: { CDLearnSection, CDCalloutBox, ReferRow },
  mixins: [platformSmsLogic]
};
</script>
