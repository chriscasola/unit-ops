'use strict';

import units from './units';

export default function convert(fromUnit, toUnit, quantity) {
	const from = units[fromUnit];
	const to = units[toUnit];

	if (from.base !== to.base) {
		throw new Error('no common base unit');
	}

	if (quantity === undefined) {
		throw new Error('no quantity specified');
	}

	return (quantity / from.ratio) * to.ratio;
}
