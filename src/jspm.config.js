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
    "incremental-dom": "npm:incremental-dom@0.5.1",
    "superb": "npm:superb.js@0.3.0"
  },
  packages: {}
});
