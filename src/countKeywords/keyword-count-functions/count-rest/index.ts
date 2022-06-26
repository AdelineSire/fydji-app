const countRest = (str: string) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,/:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'rest') {
			count += 1;
		}
	});
	return { keyword: 'rest', count: count };
};

export default countRest;
