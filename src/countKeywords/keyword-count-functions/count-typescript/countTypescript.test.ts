import countTypescript from './';

const typescript = [
	'TYPESCRIPT',
	'Typescript',
	'typescript',
	'/typescript',
	'typescript/',
	',typescript',
	'typescript,',
	'(typescript)',
	';typescript',
	'typescript;',
	'-typescript',
	'typescript-',
	'.typescript',
	'typescript.',
	':typescript',
];

test('count all forms of Typescript', () => {
	const allForms = typescript;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countTypescript(str)).toEqual({
		keyword: 'typescript',
		count: totalCount,
	});
});
