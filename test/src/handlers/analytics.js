import test from 'ava';
import {default as analytics, analyticsID, optedOut, optedIn} from '~/handlers/analytics';

test('Tracking Opt-in', async (assert) => {
    window.localStorage.clear();

    let actual = optedIn();
    let expected = false;

    assert.is(actual, expected,
        'optedIn() should return false before calling analytics.optIn().');

    analytics.optIn();

    actual = optedIn();
    expected = true;

    assert.is(actual, expected,
        'optedIn() should return true after calling analytics.optIn().');

    actual = window[`ga-disable-${analyticsID}`];
    expected = undefined;

    assert.is(actual, expected,
        `window['ga-disable-${analyticsID}'] should be undefined when analytics are being collected.`);
});

test('Tracking Opt-out', async (assert) => {
    analytics.optOut();

    let actual = optedOut();
    let expected = true;

    assert.is(actual, expected,
        'optedOut() should return true after calling analytics.optOut().');

    actual = window[`ga-disable-${analyticsID}`];
    expected = true;

    assert.is(actual, expected,
        `window['ga-disable-${analyticsID}'] should be true when analytics are disabled.`);
});

test('Tracking Preference Detection', async (assert) => {
    window.localStorage.clear();
    navigator.doNotTrack = null;
    delete window.doNotTrack;

    let actual = analytics.tracking;
    let expected = true;

    assert.is(actual, expected,
        'tracking should return true if no user preference is set.');

    navigator.doNotTrack = '1';

    actual = analytics.tracking;
    expected = false;

    assert.is(actual, expected,
        'tracking should return false if navigator.doNotTrack returns \'1\'.');

    navigator.doNotTrack = null;
    analytics.optOut();

    actual = analytics.tracking;
    expected = false;

    assert.is(actual, expected,
        'tracking should return false if a user has chosen to optOut().');

    navigator.doNotTrack = '1';
    analytics.optIn();

    actual = analytics.tracking;
    expected = true;

    assert.is(actual, expected,
        'tracking should return true if a user has chosen to optIn(), even if DNT is also set.');
});

test('Google Analytics ID', async (assert) => {
    const actual = (/^UA-\d{5,}-\d{1}$/).test(analyticsID);
    const expected = true;

    assert.is(actual, expected,
        `${analyticsID} should be a valid Google Analytics ID.`);
});

const GA = Symbol();

test('Google Analytics Data Formats', async (assert) => {
    // Provide a polyfill for testing Google Analytics
    SystemJS.map.ga = '@empty';
    window.ga = function (command, fields) {
        window[GA] = [command, fields];
    };

    analytics.optOut();
    await analytics.sendPageview('/test');

    let actual = window[GA];
    let expected;

    assert.is(actual, expected,
        'No data should be sent to Google Analytics if a user opted out of tracking.');

    analytics.optIn();
    await analytics.sendPageview('/test');

    actual = window[GA];
    expected = ['send', {
        hitType: 'pageview',
        page: '/test'
    }];

    assert.deepEqual(actual, expected,
        'analytics.sendPageview() fields should be properly formatted.');

    await analytics.sendPageview('test');

    actual = window[GA];
    expected = ['send', {
        hitType: 'pageview',
        page: '/test'
    }];

    assert.deepEqual(actual, expected,
        'analytics.sendPageview() should format paths to be relative to root.');

    const internalHref = '/';

    window[GA] = undefined;
    await analytics.record(internalHref);

    actual = window[GA];
    expected = undefined;

    assert.is(actual, expected,
        'analytics.record() should not record loading an internal URL.');

    const externalHref = 'https://derekkent.com';

    await analytics.record(externalHref);

    actual = window[GA];
    expected = ['send', {
        hitType: 'event',
        eventCategory: 'External',
        eventAction: 'open',
        eventLabel: externalHref
    }];

    assert.deepEqual(actual, expected,
        'analytics.record() should record loading an external URL as an event.');
});
