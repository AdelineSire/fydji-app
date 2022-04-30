const countGraphql = (str) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,/:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'graphql') {
			count += 1;
		}
	});
	return { keyword: 'graphql', count: count };
};

export default countGraphql;
