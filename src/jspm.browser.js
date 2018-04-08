SystemJS.config({
  baseURL: "/",
  production: true,
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "~/": "app/"
  },
  depCache: {
    "~/main.js": [
      "~/polyfills/object-assign.js",
      "~/router.js",
      "~/handlers/accessibility.js",
      "~/components/shell/shell.js"
    ],
    "~/router.js": [
      "~/handlers/analytics.js",
      "~/helpers/link.js",
      "~/components/shell/shell.js"
    ],
    "~/handlers/analytics.js": [
      "~/helpers/link.js"
    ],
    "~/components/shell/shell.js": [
      "./header/header.js",
      "./footer/footer.js",
      "./endorsements/endorsements.js",
      "./shell.html.js"
    ],
    "~/components/shell/header/header.js": [
      "~/helpers/controller/decorators.js",
      "./header.html.js"
    ],
    "~/components/shell/footer/footer.js": [
      "./footer.html.js"
    ],
    "~/components/shell/endorsements/endorsements.js": [
      "./endorsements.html.js"
    ],
    "~/pages/home/home.js": [
      "~/helpers/controller/decorators.js",
      "~/handlers/analytics.js",
      "~/handlers/xhr.js",
      "./home.html.js"
    ]
  }
});
