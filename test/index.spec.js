'use strict';

import unitOps from '../src/';
import test from 'ava';

test('exports a Quantity function', t => {
	t.ok(typeof unitOps.Quantity === 'function');
});
