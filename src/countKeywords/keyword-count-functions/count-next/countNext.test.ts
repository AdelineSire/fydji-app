import countNext from './';

const next = [
	'next',
	'Next',
	'NEXT',
	'nextjs',
	'NextJs',
	'NEXTJS',
	'next.js',
	'Next.Js',
	'NEXT.JS',
	'/Next',
	'Next/',
	'(Next)',
	',next',
	'next,',
	'-next',
	'next-',
	'.next',
	'next.',
	';next',
	'next;',
	':next',
	'next:',
];

test('count all forms of Next', () => {
	const allForms = next;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countNext(str)).toEqual({ keyword: 'next', count: totalCount });
});
