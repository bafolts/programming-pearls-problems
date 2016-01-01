"use strict";

function Bracket(income, rate) {

	this.income = income;
	this.rate = rate;

}

function getTaxBracket(brackets, income) {


	for (var i = 0, length = brackets.length; i < length - 1; i++) {

		if (income <= brackets[i].income) {
			break;
		}

	}

	return i;

}

function getTax(income) {

	var taxBrackets = [
		new Bracket(2200),
		new Bracket(2700, .14),
		new Bracket(3200, .15),
		new Bracket(3700, .16),
		new Bracket(4200, .17)
	];

	var tax = 0;

	var taxBracket = getTaxBracket(taxBrackets, income);

	if (taxBracket > 0) {

		tax = taxBrackets[taxBracket].rate * (income - taxBrackets[taxBracket - 1].income);
	}

	if (taxBracket > 1) {

		for (var i = 2; i <= taxBracket; i++) {

			tax += (taxBrackets[i - 1].rate * (taxBrackets[i - 1].income - taxBrackets[i - 2].income));

		}

	}

	return tax;

}

console.log(getTax(4000));
console.log(getTax(4));
