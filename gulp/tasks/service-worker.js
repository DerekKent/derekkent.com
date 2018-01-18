const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const config = require('../config');
const swPrecache = require('sw-precache');

// This is used as the cacheID, worth only reading the file once.
const packageName = JSON.parse(fs.readFileSync('./package.json', 'utf8')).name;

const shellFiles = [
    '/manifest.json',

    // Images
    '/images/kent.svg',
    '/images/components/divider.svg',
    '/images/social/twitter.svg',
    '/images/social/facebook.svg',
    '/images/social/e-mail.svg',
    '/images/endorsements/white/*.{png,svg,jpg}',

    // Bundles Dependencies
    '/loader.js',

    // Application Shell
    '/app/main.js',
    '/app/router.js',
    '/app/components/shell/**/*.{js,css}',

    // Handlers
    '/app/handlers/accessibility.js',
    '/app/handlers/analytics.js',
    '/app/handlers/sw.js',
    '/app/handlers/xhr.js',

    // Helpers
    '/app/helpers/conversions.js',
    '/app/helpers/link.js',
    '/app/helpers/controller/decorators.js',

    // 404 Page
    '/app/pages/404/**/*.{js,css}',

    // Global Styles
    '/styles/main.css'
];

function precache(done) {
    if (config.env !== 'production') {
        return done();
    }

    return swPrecache.write(path.join(config.dest, 'sw.js'), {
        staticFileGlobs: shellFiles.map((uri) => `${config.dest}${uri}`),
        dynamicUrlToDependencies: {
            '/': [
                `${config.dest}/index.html`
            ]
        },
        stripPrefix: config.dest,
        navigateFallback: '/index.html',
        cacheId: packageName
    });
}

gulp.task(precache);
