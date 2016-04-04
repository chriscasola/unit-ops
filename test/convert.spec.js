'use strict';

import test from 'ava';
import convert from '../src/convert';

test('converts volume units', t => {
	t.is(convert('tablespoon', 'fluidOunce', 2), 1);
	t.is(convert('fluidOunce', 'tablespoon', 2), 4);
});

test('throws when no common base unit', t => {
	t.throws(convert.bind(null, 'tablespoon', 'pound', 2), 'no common base unit');
});
