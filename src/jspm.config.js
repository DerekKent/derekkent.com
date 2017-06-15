SystemJS.config({
  paths: {
    "ga": "https://www.google-analytics.com/analytics.js",
    "maps": "https://maps.googleapis.com/maps/api/js?key=AIzaSyDs-LCQYSx1USipOSIVS_8sjnfNIPdfIsA",
    "conversions": "https://www.googleadservices.com/pagead/conversion_async.js"
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
    },
    "conversions": {
      "scriptLoad": true,
      "exports": "google_trackConversion",
      "format": "global"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/",
      "~/": "src/app/",
      "local:": "jspm_packages/local/"
    }
  },
  packages: {
    "~": {
      "main": "app/main.js",
      "format": "system"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json",
    "local:*.json"
  ],
  map: {
    "babel-polyfill": "npm:babel-polyfill@6.23.0",
    "es6-promise": "npm:es6-promise@4.1.0",
    "fetch": "npm:whatwg-fetch@1.1.1",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "incremental-dom": "local:incremental-dom@0.5.1",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "superb": "npm:superb.js@0.2.16"
  },
  packages: {
    "npm:babel-polyfill@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
      }
    },
    "npm:babel-runtime@6.23.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
      }
    },
    "local:incremental-dom@0.5.1": {
      "map": {
        "incremental-dom": "local:incremental-dom@0.5.1"
      }
    }
  }
});
