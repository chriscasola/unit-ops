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

	let result = (quantity / from.ratio) * to.ratio;

	if (to.precision !== undefined) {
		result = round(result, to.precision);
	}

	return result;
}

function round(num, digits) {
	const factor = Math.pow(10, digits);
	return Math.round(num * factor) / factor;
}
