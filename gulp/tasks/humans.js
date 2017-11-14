const spawnSync = require('child_process').spawnSync;
const gulp = require('gulp');
const config = require('../config');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function humans(done) {
    if (config.env !== 'production') {
        return done();
    }

    const committers = spawnSync('git', ['shortlog', '-sn'], {
        encoding: 'utf8',
        stdio: [0, 'pipe', 'ignore']
    }).stdout.trim().split('\n');

    return gulp
        .src(`${config.src}/index.html`)
        .pipe(pi.humans({
            team: [
                'Candidate: Derek Kent',
                'Site: https://derekkent.com',
                'Twitter: @DerekKent',
                'Location: Maryland, USA'
            ],
            thanks: committers,
            site: [
                `Last update: ${new Date().toLocaleDateString('en-US', {
                    timeZone: 'America/New_York',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}`,
                'Standards: ECMAScript 2017 & TC39 Stage 2, HTML5, CSS3, WCAG2A',
                'Components: Incremental DOM, SuperbJS, SystemJS',
                'Software: Ava, Babel, Gulp, JSPM, SCSS'
            ],
            note: 'Revolutionizing politics, one commit at a time.'
        }))
        .pipe(gulp.dest(config.dest));
}

gulp.task(humans);
