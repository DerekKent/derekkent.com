const path = require('path');
const gulp = require('gulp');
const jspm = require('jspm');
const config = require('../config');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function concatDependencies() {
    const loader = path.join(config.dest, '/loader.js');

    return gulp
        .src([
            'jspm_packages/npm/es6-promise*/dist/es6-promise.auto.js', // IE11 support
            'jspm_packages/system.src.js',
            `${config.src}/jspm.browser.js`,
            `${config.src}/jspm.config.js`,
            loader
        ])
        .pipe(pi.if(config.env !== 'production', pi.sourcemaps.init()))
        .pipe(pi.concat('loader.js'), {newLine: ';\n'})
        .pipe(pi.insert.append('\nSystemJS.import(\'app/main\');'))
        .pipe(pi.if(config.env !== 'production', pi.sourcemaps.write('.')))
        .pipe(gulp.dest(config.dest));
}

function dependencyBuilder() {
    const appPath = path.join(config.dest, '/app/**/*');
    const dependencies = `${appPath}.js - [${appPath}]`;
    const output = path.join(config.dest, '/loader.js');
    const builder = new jspm.Builder();

    builder.config({
        paths: {
            '~/': `${config.dest}/app/`
        }
    });

    return builder
        .bundle(dependencies, output, {
            minify: false,
            sourceMaps: false
        })
        .catch((err) => {
            /* eslint no-console: 0 */
            console.log('JSPM Build error');
            console.log(err);
        });
}

gulp.task('jspm-builder', gulp.series(
    dependencyBuilder,
    concatDependencies
));

gulp.task('jspm:watch', () => {
    gulp
        .watch('./jspm_packages/**/*', config.watchOpts)
        .on('change', gulp.series(
            'jspm-builder',
            'reload-browser'
        ));
});
