import countJQuery from './index.js';

const jquery = [
	'jquery',
	'Jquery',
	'JQUERY',
	'/jQuery',
	'jQuery/',
	'(jQuery)',
	',jQuery',
	'jQuery,',
	'-jQuery',
	'jQuery-',
	'.jQuery',
	'jQuery.',
	';jQuery',
	'jQuery;',
	':jQuery',
	'jQuery:',
];

test('count all forms of jQuery', () => {
	const allForms = jquery;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countJQuery(str)).toEqual({ keyword: 'jquery', count: totalCount });
});
