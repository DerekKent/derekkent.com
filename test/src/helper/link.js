import test from 'ava';

test('External Link Detection', async function (assert) {
    const {default: linkHelper} = await SystemJS.import('~/helpers/link');

    const externalLink = 'https://derekkent.com';
    const internalLink = '/issues';

    let actual = linkHelper.isExternal(externalLink);
    let expected = true;

    assert.is(actual, expected,
        `isExternal() should return true for ${externalLink}.`);

    actual = linkHelper.isExternal(internalLink);
    expected = false;

    assert.is(actual, expected,
        `isExternal() should return false for ${internalLink}.`);
});

test('Internal Link Click Detection', async function (assert) {
    const {default: linkHelper} = await SystemJS.import('~/helpers/link');

    let href = '#hash';
    let e = {
        target: {
            getAttribute() {
                return href;
            }
        }
    };

    let actual = linkHelper.validUrlClick(e);
    let expected = false;

    assert.is(actual, expected,
        'validUrlClick() should return false for links beginning with a hash (#).');

    href = 'mailto:derek@derekkent.com';
    actual = linkHelper.validUrlClick(e);
    expected = false;

    assert.is(actual, expected,
        'validUrlClick() should return false for `mailto` links.');

    href = null;
    actual = linkHelper.validUrlClick(e);
    expected = false;

    assert.is(actual, expected,
        'validUrlClick() should return false if a target\'s href property is not a string.');

    href = '/issues';
    actual = linkHelper.validUrlClick(e);
    expected = e.target;

    assert.is(actual, expected,
        'validUrlClick() should return the event target for links with relative URLs.');

    href = 'https://derekkent.com';
    actual = linkHelper.validUrlClick(e);
    expected = e.target;

    assert.is(actual, expected,
        'validUrlClick() should return the event target for links with absolute URLs.');
});