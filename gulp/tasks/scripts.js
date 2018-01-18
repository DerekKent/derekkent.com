const fs = require('fs');
const gulp = require('gulp');
const config = require('../config');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});
const rules = JSON.parse(fs.readFileSync('./.eslintrc.json', 'utf8'));

// Convert from .eslintrc.json format to ESLint's CLIEngine Format
rules.envs = Object.keys(rules.env);
rules.globals = Object.keys(rules.globals);

function eslint() {
    return gulp
        .src([
            'gulp/**/*.js',
            'tests/**/*.js',
            `${config.src}/**/*.js`,
            `!${config.src}/jspm.browser.js`,
            `!${config.src}/jspm.config.js`,
            `!${config.src}/jspm.dev.js`
        ], {
            since: gulp.lastRun('eslint')
        })
        .pipe(pi.eslint(rules))
        .pipe(pi.eslint.format())
        .pipe(pi.eslint.results((results) => {
            if (results.errorCount > 0) {
                process.exitCode = 1;
            }
        }));
}

function compileScripts() {
    let browsers = ['last 2 Chrome versions'];
    const plugins = [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}]
    ];

    if (config.env !== 'test') {
        plugins.push('@babel/plugin-transform-modules-systemjs');
        browsers = config.browsers;
    }

    return gulp
        .src([
            `${config.src}/**/*.js`,
            `!${config.src}/jspm.browser.js`,
            `!${config.src}/jspm.config.js`,
            `!${config.src}/jspm.dev.js`
        ], {
            since: gulp.lastRun('compileScripts')
        })
        .pipe(pi.if(config.env === 'development', pi.sourcemaps.init()))
        .pipe(pi.replace(/@VERSION@/g, config.version))
        .pipe(pi.replace(/@ENV@/g, config.env))
        .pipe(pi.babel({
            presets: ['@babel/preset-stage-3', ['@babel/preset-env', {
                targets: {
                    browsers
                }
            }]],
            plugins
        }))
        .pipe(pi.if(config.env === 'development', pi.sourcemaps.write('.')))
        .pipe(gulp.dest(config.dest));
}

function minifyScripts(done) {
    if (config.env !== 'production') {
        return done();
    }

    return gulp
        .src([
            `${config.dest}/**/*.js`
        ])
        .pipe(pi.uglifyEs.default())
        .pipe(gulp.dest(config.dest));
}

gulp.task(eslint);
gulp.task(compileScripts);
gulp.task('minify-scripts', minifyScripts);

gulp.task('scripts', gulp.series(
    compileScripts
));

gulp.task('scripts:watch', () => {
    gulp
        .watch(`${config.src}/**/*.js`, config.watchOpts)
        .on('change', gulp.series(
            eslint,
            compileScripts,
            'reload-browser'
        ));
});
