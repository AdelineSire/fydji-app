import countBootstrap from './';

const bootstrap = [
	'bootstrap',
	'Bootstrap',
	'BOOTSTRAP',
	'/bootstrap',
	'bootstrap/',
	'(bootstrap',
	'bootstrap)',
	'-bootstrap',
	'bootstrap-',
	',bootstrap',
	'bootstrap,',
	'.bootstrap',
	'bootstrap.',
	';bootstrap',
	'bootstrap;',
	'bootstrap:',
	':bootstrap',
];

test('count all forms of Bootstrap', () => {
	const allForms = bootstrap;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countBootstrap(str)).toEqual({
		keyword: 'bootstrap',
		count: totalCount,
	});
});
