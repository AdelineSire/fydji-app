const countTailwind = (str: string) => {
	const strToLowerCase = str.toLowerCase();
	const strSplitted = strToLowerCase.split(new RegExp('[/.,/:;() -]', 'g'));
	let count = 0;
	strSplitted.forEach((word) => {
		if (word === 'tailwind' || word === 'tailwindcss') {
			count += 1;
		}
	});
	return { keyword: 'tailwind', count: count };
};

export default countTailwind;
