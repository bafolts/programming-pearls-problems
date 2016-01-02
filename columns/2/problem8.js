
"use strict";

/*
0 = bottom
1 = middle
2 = top
3 = top left
4 = top right
5 = bottom left
6 = bottom right
*/

/*
0000 = 0
0001 = 1
0010 = 2
0011 = 3
0100 = 4
0101 = 5
0110 = 6
0111 = 7
1000 = 8
1001 = 9
1010 = A
1011 = B
1100 = C
1101 = D
1110 = E
1111 = F

/*
0 = 7D
1 = 50
2 = 37
3 = 57
4 = 5A
5 = 4F
6 = 6F
7 = 54
8 = 7F
9 = 5E
*/

function trunc(number) {

	return number >> 0;

}

function lastDigit(number) {

	return trunc(10 * ((number/10) - trunc(number / 10)));

}

function firstDigits(number) {

	return trunc(number / 10);

}

function getDisplayBytesForNumber(number) {

	return number > 10 ? getDisplayBytesForNumber(firstDigits(number)) + getDisplayBytesForNumber(lastDigit(number))
		: ["7D", "50", "37", "57", "5A", "4F", "6F", "54", "7F", "5E"][trunc(number)];

}

console.log(getDisplayBytesForNumber(0));
console.log(getDisplayBytesForNumber(123456789));

