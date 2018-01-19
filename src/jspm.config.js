SystemJS.config({
  paths: {
    "ga": "https://www.google-analytics.com/analytics.js",
    "maps": "https://maps.googleapis.com/maps/api/js?key=AIzaSyDs-LCQYSx1USipOSIVS_8sjnfNIPdfIsA",
    "conversions": "https://www.googleadservices.com/pagead/conversion_async.js"
  },
  transpiler: false,
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
      "~/": "src/app/"
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
    "github:*/*.json"
  ],
  map: {
    "babel-polyfill": "npm:babel-polyfill@6.26.0",
    "es6-promise": "npm:es6-promise@4.1.1",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "incremental-dom": "npm:incremental-dom@0.5.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "superb": "npm:superb.js@0.3.0"
  },
  packages: {
    "npm:babel-polyfill@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "core-js": "npm:core-js@2.5.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.5.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
      }
    }
  }
});
