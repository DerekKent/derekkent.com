import test from 'ava';
import accessibility from '~/handlers/accessibility';

test('Toggle WCAG2 Level', async function (assert) {
    window.localStorage.clear();

    let actual = accessibility.level;
    let expected = 'a';

    assert.is(actual, expected,
        'accessibility.level should return \'a\' by default.');

    accessibility.setLevel('aa');

    actual = accessibility.level;
    expected = 'aa';

    assert.is(actual, expected,
        'accessibility.level should return \'aa\' after calling accessibility.setLevel(\'aa\').');

    accessibility.setLevel('aaa');

    actual = accessibility.level;
    expected = 'aaa';

    assert.is(actual, expected,
        'accessibility.level should return \'aaa\' after calling accessibility.setLevel(\'aaa\').');

    assert.throws(() => accessibility.setLevel('b'), Error,
        'accessibility.setLevel() should throw an error if it is passed an invalid string value.');

    assert.throws(() => accessibility.setLevel(null), Error,
        'accessibility.setLevel() should throw an error if it is passed a non-string value.');
});
