'use strict';

const units = {
	// volume
	cup: {
		base: 'fluidOunce',
		names: [
			/^cup(s)*$/
		],
		ratio: 1 / 8,
		type: 'volume'
	},
	fluidOunce: {
		base: 'fluidOunce',
		names: [
			/^fl(uid)* (ounce(s)*|oz)$/
		],
		ratio: 1,
		type: 'volume'
	},
	gallon: {
		base: 'fluidOunce',
		names: [
			/^gallon(s)*|gal$/
		],
		ratio: 1 / 128,
		type: 'volume'
	},
	pint: {
		base: 'fluidOunce',
		names: [
			/^pint(s)*$/
		],
		ratio: 1 / 16,
		type: 'volume'
	},
	quart: {
		base: 'fluidOunce',
		names: [
			/^quart(s)*$/
		],
		ratio: 1 / 32,
		type: 'volume'
	},
	tablespoon: {
		base: 'fluidOunce',
		names: [
			/^tablespoon(s)*|tbsp(s)*$/
		],
		ratio: 2,
		type: 'volume'
	},
	teaspoon: {
		base: 'fluidOunce',
		names: [
			/^teaspoon(s)*|tsp(s)*$/
		],
		ratio: 6,
		type: 'volume'
	},

	// weight
	gram: {
		base: 'pound',
		names: [
			/^gram(s)*|g$/
		],
		ratio: 453.59237,
		type: 'weight',
		precision: 0
	},
	ounce: {
		base: 'pound',
		names: [
			/^ounce(s)*|oz$/
		],
		ratio: 16,
		type: 'weight',
		precision: 1
	},
	pound: {
		base: 'pound',
		names: [
			'lb',
			'pound'
		],
		ratio: 1,
		type: 'weight'
	}
};

export default units;
