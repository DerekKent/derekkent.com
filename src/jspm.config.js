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
    "babel-polyfill": "npm:babel-polyfill@6.16.0",
    "fetch": "npm:whatwg-fetch@1.0.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "incremental-dom": "npm:incremental-dom@0.5.1",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "superb": "npm:superb.js@0.2.12"
  },
  packages: {
    "npm:babel-polyfill@6.16.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.6",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-runtime@6.18.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.6",
        "core-js": "npm:core-js@2.4.1"
      }
    }
  }
});
