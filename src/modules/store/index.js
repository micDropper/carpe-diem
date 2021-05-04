import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
      }
    }
  },

  getters: {
    questionnaire: state => {
      return state.questionnaire;
    },

    /**
     * The appropariate bootstrap theme color for each possible scoreMessage.
     * info - usually blue,
     * warning - usually yellow,
     * danger - usually red,
     * @type {string} - the bootstrap theme color
     */
    scoreVariant: (state, getters) => {
      const categories = {
        "Minimal depression": "info",
        "Mild depression": "warning",
        "Moderate depression": "warning",
        "Moderately severe depression": "danger",
        "Severe depression": "danger"
      };
      return categories[getters.scoreMessage];
    },

    /**
     * The PHQ-9 description of depression severity according to the total score.
     * @type {string} - PHQ-9 depression severity
     */
    scoreMessage: (state, getters) => {
      let x = Math.round(getters.score);
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
     * The overall PHQ-9 score as a sum of the individual question scores (max: 27).
     * @type {number} - PHQ-9 score
     */
    score: state => {
      console.debug(state.questionnaire, "the questionnaire");
      return Math.round(
        Object.values(state.questionnaire.items).reduce(
          (a, b) => Number(a) + Number(b),
          0
        )
      );
    },

    /**
     * The message to urge users to make a suicide prevention safety plan according to their depression
     * severity.
     * @param {string} - The message urging users to make a safety plan
     */
    planMessage: (state, getters) => {
      const planMessages = {
        "Minimal depression":
          "We're sorry you have some small depression. Would you like to make a safety plan together?",
        "Mild depression":
          "We're sorry you have some mild depression. Would you like to make a safety plan together?",
        "Moderate depression":
          "We're sorry you've been feeling down. We should make a plan together for your safety:",
        "Moderately severe depression":
          "We're sorry you've been feeling down. Let's make a safety plan together for you:",
        "Severe depression":
          "We're sorry you've been feeling down and are concerned about you. Let's make a safety plan together:"
      };
      return planMessages[getters.scoreMessage];
    }
  },

  mutations: {
    /**
     * Sets the answer to a given questionNum in the PHQ-9 questionnaire.
     * @param {object} state - vuex store state
     * @param {object} payload - object containing questionNum and the corresponding answer
     */
    setQuestionNum(state, payload) {
      return (state.questionnaire.items[payload.questionNum] = Number(
        payload.answer
      ));
    }
  }
});

export default store;
