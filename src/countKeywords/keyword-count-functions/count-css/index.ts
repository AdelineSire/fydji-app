const countCss = (str: string) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,/:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'css') {
			count += 1;
		}
	});
	return { keyword: 'css', count: count };
};

export default countCss;
