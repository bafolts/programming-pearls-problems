

function getLetters(letter) {

	return ({
		"A": [4, 10, 31, 17, 17],
		"B": [30, 17, 31, 17, 30],
		"C": [31, 16, 16, 16, 31],
		"D": [30, 17, 17, 17, 30],
		"E": [31, 16, 31, 16, 31],
		"F": [31, 16, 31, 16, 16],
		"G": [31, 16, 23, 17, 31],
		"H": [17, 17, 31, 17, 17],
		"I": [31, 4, 4, 4, 31],
		"J": [31, 4, 4, 4, 28],
		"K": [17, 18, 28, 18, 17],
		"L": [16, 16, 16, 16, 31],
		"M": [17, 27, 21, 17, 17],
		"N": [17, 25, 21, 19, 17],
		"O": [31, 17, 17, 17, 31],
		"P": [31, 17, 31, 16, 16],
		"Q": [30, 17, 17, 30, 1],
		"R": [30, 17, 30, 18, 17],
		"S": [31, 16, 31, 1, 31],
		"T": [31, 4, 4, 4, 4],
		"U": [17, 17, 17, 17, 31],
		"V": [17, 17, 17, 10, 4],
		"W": [21, 21, 21, 21, 14],
		"X": [17, 10, 4, 10, 17],
		"Y": [17, 10, 4, 4, 4],
		"Z": [31, 2, 4, 8, 31]
	})[letter];

};

function displayLetterNumber(number, letter, padding) {

	console.log(
		(
			padding + number
					.toString(2)
					.replace(/1/g, letter)
					.replace(/0/g, " ")
		)
		.slice(-padding.length)
	);

}

function displayLetter(letter) {

	getLetters(letter).forEach(function (letterNumber) {

		return displayLetterNumber(letterNumber, letter, "     ");

	});

}

function displayLetters(letters) {

	letters.split("").forEach(displayLetter.bind(this));

}

displayLetters("PROGRAMMING");

