import extractSalary from './';

describe('extractSalary', () => {
	test('if entry contains no number, return null for salaryStart and salaryEnd', () => {
		const salary = 'Selon profil';
		expect(extractSalary(salary)).toEqual({
			salaryStart: null,
			salaryEnd: null,
		});
	});

	test('if entry contains only one number, return this number for salaryStart and null for salaryEnd', () => {
		const salary = '25 000';
		expect(extractSalary(salary)).toEqual({
			salaryStart: 25000,
			salaryEnd: null,
		});
	});

	test('if entry contains only one number but preceded by "jusqu\'à", return this number for salaryEnd and null for salaryStart', () => {
		const salary = "jusqu'à 50 000 selon expérience";
		expect(extractSalary(salary)).toEqual({
			salaryStart: null,
			salaryEnd: 50000,
		});
	});

	test('if entry contains two numbers, return first number for salaryStart and second number for SalaryEnd', () => {
		const salary = ' 40 000 € - 55 000 €/Année';
		expect(extractSalary(salary)).toEqual({
			salaryStart: 40000,
			salaryEnd: 55000,
		});
	});

	test.skip('if entry contains "K€", the corresponding salary is multiplied by 1000', () => {
		const salary = ' 44.9K€ bruts annuels sur 13 mois.';
		expect(extractSalary(salary)).toEqual({
			salaryStart: 44900,
			salaryEnd: null,
		});
	});
});
