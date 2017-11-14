const gulp = require('gulp');
const config = require('../config');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function precompileTemplates() {
    const plugins = [];

    if (config.env !== 'test') {
        plugins.push('transform-es2015-modules-systemjs');
    }

    return gulp
        .src(`${config.src}/app/**/*.html`, {
            since: gulp.lastRun('templates')
        })
        .pipe(pi.if(config.env !== 'production', pi.sourcemaps.init()))
        .pipe(pi.rename((uri) => {
            uri.extname = '.html.js';
        }))
        .pipe(pi.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(pi.superviewsjs())
        .pipe(pi.babel({
            compact: false,
            presets: [['env', {
                targets: {
                    browsers: config.browsers
                }
            }]],
            plugins
        }))
        .pipe(pi.if(config.env !== 'production', pi.sourcemaps.write('.')))
        .pipe(gulp.dest(`${config.dest}/app`));
}

gulp.task('templates', precompileTemplates);

gulp.task('templates:watch', () => {
    gulp
        .watch(`${config.src}/**/*.html`, config.watchOpts)
        .on('change', gulp.series(
            'templates',
            'reload-browser'
        ));
});
