<template>
  <div class="py-3">
    <p class="font-weight-bold">
      Over the last 2 weeks, how often have you been bothered by any of the
      following problems?
    </p>

    <!-- START: ITEM 1 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">1.</strong>Little interest or pleasure in doing
        things
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.one }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.one) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.one" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 1 -->

    <!-- START: ITEM 2 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">2.</strong> Feeling down, depressed, or hopeless
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.two }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.two) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.two" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 2 -->

    <!-- START: ITEM 3 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">3.</strong> Trouble falling or staying asleep, or
        sleeping too much
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.three }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.three) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.three" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 3 -->

    <!-- START: ITEM 4 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">4.</strong> Feeling tired or having little energy
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.four }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.four) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.four" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 4 -->

    <!-- START: ITEM 5 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">5.</strong> Poor appetite or overeating
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.five }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.five) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.five" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 5 -->

    <!-- START: ITEM 6 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">6.</strong> Feeling bad about yourself or that you
        are a failure or have let yourself or your family down
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.six }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.six) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.six" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 6 -->

    <!-- START: ITEM 7 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">7.</strong> Trouble concentrating on things, such
        as reading the newspaper or watching television
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.seven }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.seven) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.seven" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 7 -->

    <!-- START: ITEM 8 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">8.</strong> Moving or speaking so slowly that
        other people could have noticed. Or the opposite being so figety or
        restless that you have been moving around a lot more than usual
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.eight }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.eight) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.eight" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 8 -->

    <!-- START: ITEM 9 -->
    <div class="mb-5">
      <label class="m-0 pb-2" for="question-1"
        ><strong class="mr-2">9.</strong> Thoughts that you would be better off
        dead, or of hurting yourself
      </label>
      <div class="d-flex align-items-center flex-column">
        <div
          class="font-weight-bold text-secondary d-flex justify-content-center w-75"
        >
          <div>{{ questionnaire.items.nine }}</div>
          <div class="text-primary px-2">-</div>
          <div>{{ getAnswerDescription(questionnaire.items.nine) }}</div>
        </div>
        <div class="w-75">
          <CDRangeSlider v-model="questionnaire.items.nine" min="0" max="3" />
        </div>
      </div>
    </div>
    <!-- END: ITEM 9 -->

    <!-- START: PHQ-9 SCORE -->
    <div class="text-center font-weight-bold">
      <div>
        You may have
      </div>
      <div :class="`text-${questionnaire.scoreVariant}`">
        <div>
          {{ questionnaire.scoreMessage.toLowerCase() }}
        </div>
        <div>{{ questionnaire.score }} / 27</div>
      </div>
    </div>
    <b-progress
      max="27"
      height="2rem"
      :variant="questionnaire.scoreVariant"
      class="mb-3"
    >
      <b-progress-bar :value="questionnaire.score">
        <span>{{ questionnaire.score }}</span>
      </b-progress-bar>
    </b-progress>
    <!-- END: PHQ-9 SCORE -->
  </div>
</template>

<script>
import CDRangeSlider from "./components/CDRangeSlider.vue";

export default {
  name: "CDQuestionnaire",

  components: { CDRangeSlider },

  props: {
    value: Object
  },

  watch: {
    questionnaire: {
      handler(val) {
        this.$emit("input", val);
      },
      deep: true
    }
  },

  data() {
    return {
      /**
       * The PHQ-9 (Patient Health Questionnaire 9) depresssion severity self-assessment.
       * @type {object} - Dynamic object representing a PHQ-9
       */
      questionnaire: {
        /**
         * The individual items (questions) on the PHQ-9 questionnaire.
         * @type {object} - PHQ-9 items
         */
        items: {
          /**
           * Question one.
           * @type {number} - The given answer. Range: [0, 3]
           */
          one: 0,

          /**
           * Question two.
           * @type {number} - The given answer. Range: [0, 3]
           */
          two: 0,

          /**
           * Question three.
           * @type {number} - The given answer. Range: [0, 3]
           */
          three: 0,

          /**
           * Question four.
           * @type {number} - The given answer. Range: [0, 3]
           */
          four: 0,

          /**
           * Question five.
           * @type {number} - The given answer. Range: [0, 3]
           */
          five: 0,

          /**
           * Question six.
           * @type {number} - The given answer. Range: [0, 3]
           */
          six: 0,

          /**
           * Question seven.
           * @type {number} - The given answer. Range: [0, 3]
           */
          seven: 0,

          /**
           * Question eight.
           * @type {number} - The given answer. Range: [0, 3]
           */
          eight: 0,

          /**
           * Question nine.
           * @type {number} - The given answer. Range: [0, 3]
           */
          nine: 0
        },

        /**
         * The overall PHQ-9 score as a sum of the individual question scores (max: 27).
         * @type {number} - PHQ-9 score
         */
        get score() {
          return Math.round(
            Object.values(this.items).reduce((a, b) => Number(a) + Number(b), 0)
          );
        },

        /**
         * The PHQ-9 description of depression severity according to the total score.
         * @type {string} - PHQ-9 depression severity
         */
        get scoreMessage() {
          let x = Math.round(this.score);
          return 0 <= x == x <= 4
            ? "Minimal depression"
            : 5 <= x == x <= 9
            ? "Mild depression"
            : 10 <= x == x <= 14
            ? "Moderate depression"
            : 15 <= x == x <= 19
            ? "Moderately severe depression"
            : 20 <= x == x <= 27
            ? "Severe depression"
            : "";
        },

        /**
         * The appropariate bootstrap theme color for each possible scoreMessage.
         * info - usually blue,
         * warning - usually yellow,
         * danger - usually red,
         * @type {string} - the bootstrap theme color
         */
        get scoreVariant() {
          const categories = {
            "Minimal depression": "info",
            "Mild depression": "warning",
            "Moderate depression": "warning",
            "Moderately severe depression": "danger",
            "Severe depression": "danger"
          };
          return categories[this.scoreMessage];
        }
      }
    };
  },

  methods: {
    /**
     * Given an answer number, returns the category corresponding to this answer.
     * @param {number} - The PHQ-9 answer number (0-3)
     * @returns {string} - The PHQ-9 answer description
     */
    getAnswerDescription(answerNum) {
      const answers = {
        0: "Not at all",
        1: "Several days",
        2: "More than half the days",
        3: "Nearly every day"
      };
      return answers[answerNum];
    }
  }
};
</script>

<style lang="scss" scoped></style>
