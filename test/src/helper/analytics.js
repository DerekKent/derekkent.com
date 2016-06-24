import test from 'ava';
import {default as analytics, optedOut, optedIn} from '~/helpers/analytics';

test('Tracking Opt-in', assert => {
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
});

test('Tracking Opt-out', assert => {
    analytics.optOut();

    const actual = optedOut();
    const expected = true;

    assert.is(actual, expected,
        'optedOut() should return true after calling analytics.optOut().');
});
