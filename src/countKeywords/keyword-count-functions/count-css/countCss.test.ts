import countCss from './';

const css = [
	'css',
	'Css',
	'CSS',
	'/css',
	'css/',
	'(css',
	'css)',
	'-css',
	'css-',
	',css',
	'css,',
	'.css',
	'css.',
	';css',
	'css;',
	'css:',
	':css',
];

test('count all forms of Css', () => {
	const allForms = css;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countCss(str)).toEqual({ keyword: 'css', count: totalCount });
});

test('do not count included forms of Css', () => {
	const includedForms = ['scss'];
	const str = includedForms.join(' ');
	expect(countCss(str)).toEqual({ keyword: 'css', count: 0 });
});
