SystemJS.config({
  paths: {
    "ga": "https://www.google-analytics.com/analytics.js",
    "maps": "https://maps.googleapis.com/maps/api/js?key=AIzaSyDs-LCQYSx1USipOSIVS_8sjnfNIPdfIsA"
  },
  meta: {
    "ga": {
      "scriptLoad": true,
      "exports": "ga",
      "format": "global"
    },
    "maps": {
      "scriptLoad": true,
      "exports": "google",
      "format": "global"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/",
      "~/": "src/app/"
    }
  },
  packages: {
    "~": {
      "main": "app/main.js",
      "format": "cjs",
      "defaultExtension": "js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "incremental-dom": "npm:incremental-dom@0.4.1",
    "superb": "npm:superb.js@0.2.7"
  },
  packages: {}
});
