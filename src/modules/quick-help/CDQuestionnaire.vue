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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'one', answer: $event })"
            :value="questionnaire.items.one"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'two', answer: $event })"
            :value="questionnaire.items.two"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'three', answer: $event })"
            :value="questionnaire.items.three"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'four', answer: $event })"
            :value="questionnaire.items.four"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'five', answer: $event })"
            :value="questionnaire.items.five"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'six', answer: $event })"
            :value="questionnaire.items.six"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'seven', answer: $event })"
            :value="questionnaire.items.seven"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'eight', answer: $event })"
            :value="questionnaire.items.eight"
            min="0"
            max="3"
          />
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
          <CDRangeSlider
            @input="setQuestionNum({ questionNum: 'nine', answer: $event })"
            :value="questionnaire.items.nine"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 9 -->

    <!-- START: PHQ-9 SCORE -->
    <div class="text-center font-weight-bold">
      <div>
        You may have
      </div>
      <div :class="`text-${scoreVariant}`">
        <div>
          {{ scoreMessage.toLowerCase() }}
        </div>
        <div>{{ score }} / 27</div>
      </div>
    </div>
    <b-progress max="27" height="2rem" :variant="scoreVariant" class="mb-3">
      <b-progress-bar :value="score">
        <span>{{ score }}</span>
      </b-progress-bar>
    </b-progress>
    <!-- END: PHQ-9 SCORE -->
  </div>
</template>

<script>
import CDRangeSlider from "./components/CDRangeSlider.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CDQuestionnaire",

  components: { CDRangeSlider },

  props: {
    value: Object
  },

  computed: {
    ...mapGetters(["questionnaire", "scoreVariant", "scoreMessage", "score"])
  },

  methods: {
    ...mapMutations(["setQuestionNum"]),

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
