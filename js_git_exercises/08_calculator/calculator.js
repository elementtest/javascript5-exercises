const add = function(x, y) {
	return x + y;
};

const subtract = function(a, b) {
	return a - b;	
};

const sum = function(arr) {
	let sum = 0;
	for (let a of arr)
		sum += a;
	return sum;	
};

const multiply = function(arr) {
	const initialValue = 0;
	const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator * currentValue)
return sumWithInitial;
};
const power = function(x,y) {
	return x ** y;
};

//const factorial = function(num) {
const factorial = function factorialize(num) {
	if (num < 0) 
		return -1;

	else if (num == 0)
		return 1;

	else {
		return (num * factorialize(num -1));}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

