<template>
  <CDLearnSection>
    <template #heading>
      Ask
    </template>

    <template #body>
      <CDCalloutBox>
        Ask specifically about suicide, especially when you notice risk factors.
        Studies show that asking about suicide does not increase someone’s risk.
      </CDCalloutBox>

      <!-- START: FIXED RISKS -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Fixed Risk Factors</h3>
        <p>
          These factors cannot be easily changed. They are relatively weak
          predictors of risk, but should still be taken into consideration.
        </p>

        <ul class="pl-4">
          <li class="text-danger">
            One or more past suicide attempts
            <b-icon icon="shield-fill-exclamation" />
          </li>
          <ul>
            <li class="font-italic">
              <strong>This is the strongest fixed predictor of suicide.</strong>
            </li>
          </ul>

          <li>
            Demographic
          </li>
          <ul>
            <li>
              <strong>Race/Ethnicity:</strong> White, American Indian, Alaskan
              Native
            </li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Age:</strong> Middle aged women, Older men</li>
            <li><strong>Marital Status:</strong> Divorced men</li>
          </ul>

          <li>Genetics</li>
          <li>Family history of suicide</li>
          <li>History of Substance Use Disorder</li>
          <li>Veteran status</li>
        </ul>
      </div>
      <!-- END: FIXED RISKS -->

      <!-- START: FLUID RISKS -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Fluid Risk Factors</h3>
        <p>
          These factors are inheriently subject to potential change.
          <strong
            >Look especially at these factors when thinking about suicide
            risk.</strong
          >
          <font-awesome-icon icon="user-injured" class="text-xl ml-2" />
        </p>
        <ul class="pl-4">
          <li>
            Isolation or low-connectedness
          </li>
          <ul>
            <li class="font-italic">
              "Feeling like a burden"
            </li>
          </ul>

          <li>
            Mental health problems or serious distress
            <ul>
              <li><strong>Depression</strong></li>
              <li><strong>Anxiety</strong></li>
              <li><strong>PTSD</strong></li>
              <li><strong>High agitation or anger</strong></li>
              <li><strong>Hopelessness</strong></li>
              <li><strong>Loss of pleasure or interest in things</strong></li>
            </ul>
          </li>

          <li>Chronic pain or a recent major illness diagnosis</li>
          <li>Major life event</li>
          <ul>
            <li>
              <strong>Breakup</strong>
            </li>
            <li>
              <strong>Illness</strong>
            </li>
            <li>
              <strong>Loss of loved one</strong>
            </li>
          </ul>

          <li>Sleep disturbance</li>
          <ul>
            <li>
              <strong>Persistent insomnia</strong>
            </li>
            <li>
              <strong>Nightmares</strong>
            </li>
          </ul>

          <li>
            Ready access to lethal methods of suicide
          </li>
          <ul>
            <li class="text-danger">
              <strong
                >This does <span class="font-italic"><u>not</u></span> predict a
                suicide attempt, but it
                <span class="font-italic"><u>does</u></span> predict suicide
                death.</strong
              >
              <font-awesome-icon icon="skull" class="ml-1" />
            </li>
          </ul>
        </ul>
      </div>
      <!-- END: FLUID RISKS -->

      <!-- START: DETECTING RISK -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">
          Detecting Risk Factors
        </h3>
        <p>
          Sometimes <strong>what people say</strong> is different than
          <strong>what they do</strong>. Pay attention to
          both.<font-awesome-icon icon="diagnoses" class="text-xl ml-1" />
        </p>
      </div>

      <div class="d-flex">
        <div
          class="text-center font-italic rounded-xl d-flex justify-content-center align-items-center mr-1 w-50"
        >
          What people say
        </div>
        <div
          class="text-center font-italic rounded-xl d-flex justify-content-center align-items-center ml-1 w-50"
        >
          What people do
        </div>
      </div>

      <div class="d-flex">
        <b-alert
          show
          variant="danger"
          class="text-center font-italic rounded-xl d-flex justify-content-center align-items-center mr-1 w-50"
        >
          I can't take this anymore.
        </b-alert>
        <b-alert
          show
          variant="danger"
          class="text-center rounded-xl d-flex justify-content-center align-items-center ml-1 w-50"
        >
          Appear agitated
        </b-alert>
      </div>

      <div class="d-flex">
        <b-alert
          show
          variant="danger"
          class="text-center font-italic rounded-xl d-flex justify-content-center align-items-center mr-1 w-50"
        >
          Nobody cares what happens to me.
        </b-alert>
        <b-alert
          show
          variant="danger"
          class="text-center rounded-xl d-flex justify-content-center align-items-center ml-1 w-50"
        >
          Withdraw from family and friends
        </b-alert>
      </div>

      <div class="d-flex">
        <b-alert
          show
          variant="danger"
          class="text-center font-italic rounded-xl d-flex justify-content-center align-items-center mr-1 w-50"
        >
          People would be better off if I wasn't around.
        </b-alert>
        <b-alert
          show
          variant="danger"
          class="text-center rounded-xl d-flex justify-content-center align-items-center ml-1 w-50"
        >
          Have difficulty sleeping
        </b-alert>
      </div>

      <div class="d-flex">
        <b-alert
          show
          variant="danger"
          class="text-center font-italic rounded-xl d-flex justify-content-center align-items-center mr-1 w-50"
        >
          I wish I were already dead.
        </b-alert>
        <b-alert
          show
          variant="danger"
          class="text-center rounded-xl d-flex justify-content-center align-items-center ml-1 w-50"
        >
          Try to obtain means (e.g., stockpiling medications)
        </b-alert>
      </div>
      <!-- END: DETECTING RISK -->

      <!-- START: PROTECTIVE FACTORS -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Protective Factors</h3>
        <p>These factors often help mitigate suicide risk.</p>
        <ul>
          <li>Connectedness to family/friends</li>
          <li>Problem-solving skills</li>
          <li>
            Regligious, spiritual, or cultural beliefs that discourage suicide
          </li>
          <li>Able to identify reasons for living</li>
          <li>Access to mental health services</li>
        </ul>
      </div>
      <!-- END: PROTECTIVE FACTORS -->

      <!-- START: ASSESSING RISK -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">
          Weighing Risk and Protective Factors
        </h3>
        <p>
          There is not one thing people say or do that signals suicide risk, and
          no single protective factor can guarantee safety.
        </p>
        <p class="font-weight-bold font-italic">When in doubt, ask!</p>
        <p>
          Remember, asking about suicide does not increase the risk of suicide.
        </p>
      </div>
      <!-- END: ASSESSING RISK -->

      <!-- START: DO VS DON'T -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">How to Ask Do vs Don't</h3>
        <h4 class="font-weight-bold text-secondary">Do</h4>

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

      <div class="mt-4">
        <h4 class="font-weight-bold text-secondary">Don't</h4>

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
      <!-- END: DO VS DON'T -->

      <!-- START: BE PREPARED -->
      <div class="mt-4">
        <h3 class="font-weight-bold text-secondary">Be Prepared</h3>
        <p>Be prepared for a yes or a no, and stay calm.</p>
      </div>
      <!-- END: BE PREPARED -->
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
