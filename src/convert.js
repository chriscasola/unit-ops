import units from './units';

module.exports = function convert(fromUnit, toUnit, quantity) {
	const from = units[fromUnit];
	const to = units[toUnit];

	if (from.base !== to.base) {
		throw new Error('no common base unit');
	}

	return (quantity / from.ratio) * to.ratio;
};
