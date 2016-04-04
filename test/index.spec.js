'use strict';

import test from 'ava';
import unitOps from '../src/';

test('exports a convert function', t => {
	t.ok(typeof unitOps.convert === 'function');
});
