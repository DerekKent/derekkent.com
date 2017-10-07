const fs = require('fs');
const gulp = require('gulp');
const config = require('../config');
const pi = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

const FAVICON_DATA_FILE = '.favicon.json';

function generateFavicons(done) {
    if (config.env !== 'production') {
        done();
        return;
    }

    pi.realFavicon.generateFavicon({
        masterPicture: `${config.src}/images/favicon.svg`,
        dest: config.dest,
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '14%',
                appName: 'Derek Kent'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'whiteSilhouette',
                backgroundColor: '#2b5797',
                onConflict: 'override',
                appName: 'Derek Kent'
            },
            androidChrome: {
                pictureAspect: 'backgroundAndMargin',
                margin: '17%',
                backgroundColor: '#ffffff',
                themeColor: '#292d78',
                manifest: {
                    name: 'Derek Kent',
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#292d78'
            }
        },
        settings: {
            compression: 1,
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: true
        },
        markupFile: FAVICON_DATA_FILE
    }, () => {
        done();
    });
}

function injectFaviconMarkup() {
    if (config.env !== 'production') {
        return gulp
            .src(`${config.src}/*.html`, {
                since: gulp.lastRun('injectFaviconMarkup')
            })
            .pipe(gulp.dest(config.dest));
    }

    return gulp
        .src(`${config.src}/*.html`, {
            since: gulp.lastRun('injectFaviconMarkup')
        })
        .pipe(pi.realFavicon.injectFaviconMarkups(
            JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code
        ))
        .pipe(gulp.dest(config.dest));
}

gulp.task(generateFavicons);
gulp.task(injectFaviconMarkup);

gulp.task('favicon', gulp.series(
    generateFavicons,
    injectFaviconMarkup
));

gulp.task('favicon:watch', () => {
    gulp
        .watch(`${config.src}/*.html`, config.watchOpts)
        .on('change', gulp.series(
            'favicon',
            'reload-browser'
        ));
});
