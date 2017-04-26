const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const config = require('../config');
const swPrecache = require('sw-precache');

// This is used as the cacheID, worth only reading the file once.
const packageName = JSON.parse(fs.readFileSync('./package.json', 'utf8')).name;

const shellFiles = [
    'index.html',
    '/manifest.json',

    // Images
    '/images/kent.svg',
    '/images/components/divider.svg',
    '/images/social/twitter.svg',
    '/images/social/facebook.svg',

    // Bundles Dependencies
    '/loader.js',

    // Application Shell
    '/app/main.js',
    '/app/router.js',
    '/app/components/shell/**/*.{js,css}',

    // Handlers
    '/app/handlers/accessibility.js',
    '/app/handlers/analytics.js',

    // Helpers
    '/app/helpers/link.js',
    '/app/helpers/controller/decorators.js',

    // 404 Page
    '/app/pages/404/**/*.{js,css}'
];

function precache() {
    return swPrecache.write(path.join(config.dest, 'sw.js'), {
        staticFileGlobs: shellFiles.map((uri) => `${config.dest}${uri}`),
        stripPrefix: config.dest,
        navigateFallback: '/404',
        cacheId: packageName
    });
}

gulp.task(precache);
