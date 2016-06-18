var spawnSync = require('child_process').spawnSync;
var gulp = require('gulp');
var config = require('../config');
var pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

function humans() {
    var committers = spawnSync('git', ['shortlog', '-sn'], {
        encoding: 'utf8',
        stdio: [0, 'pipe', 'ignore']
    }).stdout.trim().split('\n');

    return gulp.src(`${config.src}/index.html`)
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
            'Standards: ECMAScript 2016, HTML5, CSS3, WCAG2A',
            'Components: SystemJS, SuperbJS, Incremental DOM',
            'Software: Gulp, JSPM, SCSS, Superviews.js'
        ],
        note: 'Revolutionizing politics, one commit at a time.'
    }))
    .pipe(gulp.dest(config.dest));
}

gulp.task(humans);
