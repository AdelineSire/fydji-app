import countFrontend from './index.js';

const frontend = [
	'front',
	'front-end',
	'frontend',
	'Frontend',
	'FRONTEND',
	'/frontend',
	'frontend/',
	'(frontend',
	'frontend)',
	'-frontend',
	'frontend-',
	',frontend',
	'frontend,',
	'.frontend',
	'frontend.',
	';frontend',
	'frontend;',
	'frontend:',
	':frontend',
];

test('count all forms of frontend', () => {
	const allForms = frontend;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countFrontend(str)).toEqual({
		keyword: 'frontend',
		count: totalCount,
	});
});

test('do not count included forms of front', () => {
	const includedForms = ['frontal', 'affronter'];
	const str = includedForms.join(' ');
	expect(countFrontend(str)).toEqual({ keyword: 'frontend', count: 0 });
});
