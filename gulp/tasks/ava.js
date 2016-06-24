const gulp = require('gulp');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function ava() {
    return gulp.src('test/**/*.js').pipe(pi.ava());
}

gulp.task(ava);
