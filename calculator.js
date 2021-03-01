const add = require('./core/add');
const sub = require('./core/sub');
const mult = require('./core/mult');
const div = require('./core/div');

module.exports = {
	add,
	sub,
	mult,
	div,
	set:(number)=> {
		return currentNumber = number;
	}
};