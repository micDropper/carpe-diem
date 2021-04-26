import { detect } from "detect-browser";

/**
 * Mixin containing platform specific info pertinent to sending SMS messages.
 */
export default {
  computed: {
    /**
     * Returns the SMS sentinel for Android (?) vs Apple (&).
     */
    platformSMSSentinel() {
      return this.browser.name === "safari" ||
        this.browser.os === "Mac OS" ||
        this.browser.os === "iOS"
        ? "&"
        : "?";
    }
  },
  data() {
    return {
      browser: detect()
    };
  }
};
