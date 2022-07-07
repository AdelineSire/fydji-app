import countTailwind from './';

const tailwind = [
	'tailwind',
	'tailwindcss',
	'Tailwind',
	'TAILWIND',
	'/tailwind',
	'tailwind/',
	'(tailwind',
	'tailwind)',
	'-tailwind',
	'tailwind-',
	',tailwind',
	'tailwind,',
	'.tailwind',
	'tailwind.',
	';tailwind',
	'tailwind;',
	'tailwind:',
	':tailwind',
];

test('count all forms of Tailwind', () => {
	const allForms = tailwind;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countTailwind(str)).toEqual({
		keyword: 'tailwind',
		count: totalCount,
	});
});
