var gulp = require('gulp');
var config = require('../config');
var pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function precompileTemplates() {
    return gulp.src(`${config.src}/app/**/*.html`, {
        since: gulp.lastRun('templates')
    })
    .pipe(pi.if(config.env !== 'production', pi.sourcemaps.init()))
    .pipe(pi.rename((uri) => {
        uri.extname = '.html.js';
    }))
    .pipe(pi.htmlmin({
        collapseWhitespace: true
    }))
    .pipe(pi.superviewsjs({
        es6: true
    }))
    .pipe(pi.babel({
        compact: false,
        presets: ['es2015']
    }))
    .pipe(pi.if(config.env !== 'production', pi.sourcemaps.write('.')))
    .pipe(gulp.dest(`${config.dest}/app`));
}

gulp.task('templates', precompileTemplates);

gulp.task('templates:watch', () => {
    gulp.watch(`${config.src}/**/*.html`, config.watchOpts)
    .on('change', gulp.series(
        'templates',
        'reload-browser'
    ));
});
