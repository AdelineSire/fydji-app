const countTypescript = (str: string) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'typescript') {
			count += 1;
		}
	});
	return { keyword: 'typescript', count: count };
};

export default countTypescript;
