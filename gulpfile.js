var gulp = require('gulp');
require('require-dir')('./gulp/tasks', {recurse: true});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'copy',
        gulp.series(
            'favicon',
            'html'
        ),
        'styles',
        'scripts',
        'templates',
        'images'
    ),
    'jspm-builder'
));

gulp.task('default', gulp.series(
    'build'
));

gulp.task('dev', gulp.series(
    'build',
    'watch'
));

gulp.task('dist', gulp.series(
    'production',
    'build',
    'precache',
    'minify-scripts',
    'humans'
));

gulp.task('lint', gulp.parallel(
    'scsslint',
    'eslint'
));

gulp.task('test', gulp.parallel(
    'lint',
    'ava'
));
