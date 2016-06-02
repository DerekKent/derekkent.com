SystemJS.config({
  packages: {
    "@derekkent/derekkent.com": {
      "format": "cjs",
      "main": "/app/main.js"
    },
    "~/": {
      defaultExtension: 'js',
    }
  }
});

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
    }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "superb": "npm:superb.js@0.0.4",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "incremental-dom": "npm:incremental-dom@0.4.1",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "npm:superb.js@0.0.4": {
      "map": {
        "supermodels.js": "npm:supermodels.js@0.1.1"
      }
    }
  }
});
