const countFrontend = (str: string) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,/:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'frontend' || word === 'front') {
			count += 1;
		}
	});
	return { keyword: 'frontend', count: count };
};

export default countFrontend;
