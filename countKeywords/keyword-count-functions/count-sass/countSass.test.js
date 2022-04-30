import countSass from './index.js';

const sass = [
	'SASS',
	'Sass',
	'sass',
	'/sass',
	'sass/',
	',sass',
	'sass,',
	'(sass)',
	';sass',
	'sass;',
	'-sass',
	'sass-',
	'.sass',
	'sass.',
	':sass',
];

test('count all forms of Sass', () => {
	const allForms = sass;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countSass(str)).toEqual({ keyword: 'sass', count: totalCount });
});
