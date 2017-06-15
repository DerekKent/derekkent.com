SystemJS.config({
  baseURL: "/",
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "~/": "app/",
    "local:": "jspm_packages/local/"
  }
});
