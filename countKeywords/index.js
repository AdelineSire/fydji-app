const countKeywords = (str) => {
	const keywords = [
		'bootstrap',
		'css',
		'frontend',
		'graphql',
		'html',
		'jquery',
		'less',
		'next',
		'react',
		'rest',
		'sass',
		'tailwind',
		'typescript',
	];
	const results = [];

	keywords.forEach((keyword) => {
		const functionPath = `./keyword-count-functions/count-${keyword}/index.js`;
		const countFunction = require(functionPath);
		const result = countFunction(str);
		if (result.count > 0) {
			results.push(result);
		}
	});
	return results;
};

export default countKeywords;
