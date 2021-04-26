module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/carpe-diem/" : "/",
  pwa: {
    name: "CARPE Diem",
    workboxPluginMode: "GenerateSW",
    themeColor: "#2e2e2e",
    appleMobileWebAppCapable: "yes",
    assetsVersion: "0.0.1",
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/msapplication-icon.png"
    },
    manifestOptions: {
      categories: ["health", "education", "medical"],
      description: "A CARPE Diem suicide prevention application.",
      display: "standalone",
      lang: "en-US",
      orientation: "portrait",
      scope: "https://micdropper.github.io/carpe-diem/",
      start_url: "https://micdropper.github.io/carpe-diem/"
    }
  }
};
