import test from 'ava';

test('Tracking Opt-in', async function (assert) {
    const {default: analytics, optedOut, optedIn} = await SystemJS.import('~/helpers/analytics');

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

test('Tracking Opt-out', async function (assert) {
    const {default: analytics, optedOut, optedIn} = await SystemJS.import('~/helpers/analytics');

    analytics.optOut();

    const actual = optedOut();
    const expected = true;

    assert.is(actual, expected,
        'optedOut() should return true after calling analytics.optOut().');
});
