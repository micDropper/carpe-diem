import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import SolidIcons from "./solid-icons.js";

/**
 * Function that installs imported font-awesome icons.
 */
export default () => {
  SolidIcons.forEach(icon => library.add(icon));
  Vue.component("font-awesome-icon", FontAwesomeIcon);
};
