const countHtml = (str) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'html') {
			count += 1;
		}
	});
	return { keyword: 'html', count: count };
};

export default countHtml;
