const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
 
  if (!args) {
    return 0;
  }

  return args.reduce((total, element) => total + element, 0);
};

const multiply = function(args) {
  return args.reduce((total, element) => total * element, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a===0) {
    return 1;
  }

  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
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
