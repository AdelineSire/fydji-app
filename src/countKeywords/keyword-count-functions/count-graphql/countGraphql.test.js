import countGraphql from './index.js';

const graphql = [
	'graphql',
	'GraphQL',
	'GRAPHQL',
	'/GraphQL',
	'GraphQL/',
	'(GraphQL',
	'GraphQL)',
	'-GraphQL',
	'GraphQL-',
	',GraphQL',
	'GraphQL,',
	'.GraphQL',
	'GraphQL.',
	';GraphQL',
	'GraphQL;',
	'GraphQL:',
	':GraphQL',
];

test('count all forms of GraphQL', () => {
	const allForms = graphql;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countGraphql(str)).toEqual({ keyword: 'graphql', count: totalCount });
});
