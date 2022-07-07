import countLess from './';

const less = [
	'less',
	'Less',
	'LESS',
	'/less',
	'less/',
	'(less)',
	',less',
	'less,',
	'-less',
	'less-',
	'.less',
	'less.',
	';less',
	'less;',
	':less',
	'less:',
];

test('count all forms of less', () => {
	const allForms = less;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countLess(str)).toEqual({ keyword: 'less', count: totalCount });
});

test('do not count included forms of less', () => {
	const includedForms = ['lesson', 'lessive'];
	const str = includedForms.join(' ');
	expect(countLess(str)).toEqual({ keyword: 'less', count: 0 });
});
