'use strict';

import unitOps from '../src/';
import test from 'ava';

test('exports a wuantity function', t => {
	t.ok(typeof unitOps.quantity === 'function');
});

test('quantity returns 1 by default', t => {
	t.is(unitOps.quantity(), 1);
});

test('quantity returns the first argument', t => {
	t.is(unitOps.quantity(2), 2);
});
