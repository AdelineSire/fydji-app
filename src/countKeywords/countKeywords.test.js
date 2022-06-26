import countKeywords from './index.js';

test('return an array of objects containing keyword and count', () => {
	const str =
		"Développeur front React.js. React, JavaScript, style (css/sass). 3 ans d'expérience en frontend sur reactjs ";
	expect(countKeywords(str)).toEqual([
		{ keyword: 'css', count: 1 },
		{ keyword: 'frontend', count: 2 },
		{ keyword: 'react', count: 3 },
		{ keyword: 'sass', count: 1 },
	]);
});

test('do not return keyword with count of 0', () => {
	const keywords = ['react', 'css'];
	const str = 'React.js ... React ... JavaScript Node.JS';
	expect(countKeywords(str)).toEqual([{ keyword: 'react', count: 2 }]);
});
