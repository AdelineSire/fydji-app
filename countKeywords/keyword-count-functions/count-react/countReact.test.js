import countReact from './index.js';

const react = [
	'react',
	'React',
	'REACT',
	'reactjs',
	'ReactJs',
	'REACTJS',
	'react.js',
	'React.Js',
	'REACT.JS',
	'/React',
	'React/',
	'(React)',
	',react',
	'react,',
	'-react',
	'react-',
	'.react',
	'react.',
	';react',
	'react;',
	':react',
	'react:',
];

test('count all forms of React', () => {
	const allForms = react;
	const str = allForms.join(' ');
	const totalCount = allForms.length;
	expect(countReact(str)).toEqual({ keyword: 'react', count: totalCount });
});

test('do not count included forms of react', () => {
	const includedForms = ['reactif', 'reactive', 'reaction'];
	const str = includedForms.join(' ');
	expect(countReact(str)).toEqual({ keyword: 'react', count: 0 });
});

test('do not count React Native', () => {
	const str = 'react native, react-native';
	expect(countReact(str)).toEqual({ keyword: 'react', count: 0 });
});
