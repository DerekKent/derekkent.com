var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var config = require('../config');
var swPrecache = require('sw-precache');

// This is used as the cacheID, worth only reading the file once.
var packageName = JSON.parse(fs.readFileSync('./package.json', 'utf8')).name;

const shellFiles = [
    'index.html',
    '/manifest.json',
    '/images/*.{png,jpg,jpeg,gif,svg}',

    // Bundles Dependencies
    // '/dependencies.js',
    '/jspm_packages/system.js',

    // Application Shell
    '/jspm.browser.js',
    '/jspm.config.js',
    '/app/main.js',
    '/app/router.js',
    '/app/components/shell/**/*.{js,css}',

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
