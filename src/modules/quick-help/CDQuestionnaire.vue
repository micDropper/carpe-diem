<template>
  <div>
    <p class="font-weight-bold pt-3">
      Over the last 2 weeks, how often have you been bothered by any of the
      following problems?
    </p>

    <!-- START: ITEM 1 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.one"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 1 -->

    <!-- START: ITEM 2 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.two"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 2 -->

    <!-- START: ITEM 3 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.three"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 3 -->

    <!-- START: ITEM 4 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.four"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 4 -->

    <!-- START: ITEM 5 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.five"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 5 -->

    <!-- START: ITEM 6 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.six"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 6 -->

    <!-- START: ITEM 7 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.seven"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 7 -->

    <!-- START: ITEM 8 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.eight"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 8 -->

    <!-- START: ITEM 9 -->
    <div class="mb-4">
      <label class="m-0" for="question-1"
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
          <b-form-input
            id="question-1"
            v-model="questionnaire.items.nine"
            type="range"
            min="0"
            max="3"
          />
        </div>
      </div>
    </div>
    <!-- END: ITEM 9 -->

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
      class="mb-4"
    >
      <b-progress-bar :value="questionnaire.score">
        <span>{{ questionnaire.score }}</span>
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  name: "CDQuestionnaire",

  data() {
    return {
      questionnaire: {
        items: {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          six: 0,
          seven: 0,
          eight: 0,
          nine: 0
        },
        get score() {
          return Math.round(
            Object.values(this.items).reduce((a, b) => Number(a) + Number(b), 0)
          );
        },
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
        get scoreVariant() {
          let categories = {
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
