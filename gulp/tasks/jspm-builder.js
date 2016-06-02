/* eslint no-console: 0 */
var path = require('path');
var gulp = require('gulp');
var jspm = require('jspm');
var config = require('../config');
var bs = require('browser-sync').get(config.name);

const glob = [
    'jspm_packages/system.js',
    'jspm_packages/system.js.map',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-polyfills.js.map',
    'jspm_packages/**/*.json'
];

function copyDependencies() {
    return gulp.src(glob, {
        base: './',
        since: gulp.lastRun(copyDependencies)
    })
    .pipe(gulp.dest(config.dest));
}

function jspmBuilder() {
    var builder = new jspm.Builder();
    var appPath = path.join(config.dest, '/app/**/*');
    var dependencies = `${appPath}.js - [${appPath}]`;
    var output = path.join(config.dest, '/libs/dependencies.js');

    builder.config({
        defaultJSExtensions: true,
        paths: {
            '~/*': `${config.dest}/app/*`
        }
    });

    return builder.bundle(dependencies, output, {
        minify: (config.env === 'production'),
        sourceMaps: (config.env !== 'production')
    })
    .catch((err) => {
        console.log('JSPM Build error');
        console.log(err);
    });
}

gulp.task(copyDependencies);
gulp.task('jspm-builder', gulp.parallel(
    copyDependencies,
    jspmBuilder
));

gulp.task('jspm:watch', () => {
    gulp.watch('./jspm_packages/**/*', config.watchOpts)
    .on('change', gulp.series(
        'jspm-builder',
        bs.reload
    ));
});
