import countHtml from './';

const html = [
	'Html',
	'HTML',
	'html',
	'/html',
	'html/',
	'(html)',
	',html',
	'html,',
	'-html',
	'html-',
	'.html',
	'html.',
	';html',
	'html;',
	':html',
	'html:',
];

test('count all forms of html', () => {
	const allForms = html;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countHtml(str)).toEqual({ keyword: 'html', count: totalCount });
});
