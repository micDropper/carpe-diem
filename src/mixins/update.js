/**
 * Mixin that handles PWA updates.
 */
export default {
  data() {
    return {
      isSyncing: false,
      workerRegistration: null,
      updateExists: false
    };
  },

  methods: {
    /**
     * Handles the updated service worker event.
     * @param {CustomEvent} event
     */
    handleServiceWorkerUpdated(event) {
      this.workerRegistration = event.detail;
      this.updateExists = true;
    },

    /**
     * Tells the new service worker to go ahead and replace the old one. If there isn't a new one, or it has
     * already been registered, this function simply returns.
     */
    refreshApp() {
      this.updateExists = false;
      if (!this.workerRegistration || !this.workerRegistration.waiting) return;
      this.workerRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  },

  /**
   * Registers listeners as soon as the app loads.
   */
  created() {
    document.addEventListener(
      "serviceWorkerUpdated",
      this.handleServiceWorkerUpdated,
      {
        once: true
      }
    );

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.isSyncing) return;
      this.isSyncing = true;
      window.location.reload();
    });
  }
};
