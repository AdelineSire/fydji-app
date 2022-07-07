import countRest from './';

const rest = [
	'rest',
	'Rest',
	'REST',
	'/REST',
	'REST/',
	'(REST',
	'REST)',
	'-REST',
	'REST-',
	',REST',
	'REST,',
	'.REST',
	'REST.',
	';REST',
	'REST;',
	'REST:',
	':REST',
];

test('count all forms of Rest', () => {
	const allForms = rest;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countRest(str)).toEqual({ keyword: 'rest', count: totalCount });
});

test('do not count included forms of Rest', () => {
	const includedForms = ['reste', 'prestataire'];
	const str = includedForms.join(' ');
	expect(countRest(str)).toEqual({ keyword: 'rest', count: 0 });
});
