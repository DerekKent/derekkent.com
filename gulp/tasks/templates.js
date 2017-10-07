const gulp = require('gulp');
const config = require('../config');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function precompileTemplates() {
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
                    browsers: [
                        'last 3 versions',
                        'IE 11'
                    ]
                }
            }]],
            plugins: ['transform-es2015-modules-systemjs']
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
