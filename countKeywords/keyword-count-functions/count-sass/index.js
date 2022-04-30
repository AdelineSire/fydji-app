const countCss = (str) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'sass') {
			count += 1;
		}
	});
	return { keyword: 'sass', count: count };
};

export default countCss;
