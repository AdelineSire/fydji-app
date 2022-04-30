const extractSalary = (str) => {
	const strCleaned = str.replaceAll(' ', '');

	const regex = /\d+/g;

	const numbers = [...strCleaned.matchAll(regex)];

	let salary = { salaryStart: null, salaryEnd: null };

	if (numbers?.length === 1) {
		if (numbers[0].index === 0) {
			salary.salaryStart = parseInt(numbers[0][0]);
		} else {
			salary.salaryEnd = parseInt(numbers[0][0]);
		}
	}

	if (numbers?.length === 2) {
		salary.salaryStart = parseInt(numbers[0][0]);
		salary.salaryEnd = parseInt(numbers[1][0]);
	}

	return salary;
};

export default extractSalary;
