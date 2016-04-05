'use strict';

import test from 'ava';
import convert from '../src/convert';

test('cup', t => {
	t.is(convert('cup', 'pint', 4), 2);
	t.is(convert('pint', 'cup', 2), 4);
});

test('fluid ounce', t => {
	t.is(convert('fluidOunce', 'tablespoon', 2), 4);
	t.is(convert('tablespoon', 'fluidOunce', 2), 1);
});

test('gallon', t => {
	t.is(convert('gallon', 'cup', 2), 32);
	t.is(convert('cup', 'gallon', 32), 2);
});

test('pint', t => {
	t.is(convert('pint', 'quart', 3), 1.5);
	t.is(convert('quart', 'pint', 1.5), 3);
});

test('quart', t => {
	t.is(convert('quart', 'gallon', 8), 2);
	t.is(convert('gallon', 'quart', 2), 8);
});

test('tablespoon', t => {
	t.is(convert('tablespoon', 'teaspoon', 2), 6);
	t.is(convert('teaspoon', 'tablespoon', 6), 2);
});

test('teaspoon', t => {
	t.is(convert('teaspoon', 'cup', 24), 0.5);
	t.is(convert('cup', 'teaspoon', 0.5), 24);
});

test('throws when no common base unit', t => {
	t.throws(convert.bind(null, 'tablespoon', 'pound', 2), 'no common base unit');
});

test('throws when no quantity is provided', t => {
	t.throws(convert.bind(null, 'tablespoon', 'cup'), 'no quantity specified');
});
