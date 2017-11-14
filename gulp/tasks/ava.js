const gulp = require('gulp');
const config = require('../config');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function ava() {
    return gulp
        .src('tests/src/**/*.js', {
            since: gulp.lastRun('ava')
        })
        .pipe(pi.ava());
}

gulp.task(ava);

gulp.task('ava:watch', () => {
    gulp
        .watch(`${config.src}/**/*.js`, config.watchOpts)
        .on('change', gulp.series(
            ava
        ));
});
