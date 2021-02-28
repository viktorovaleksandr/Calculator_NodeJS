const add = require('./add.js');
const sub = require('./core/sub.js');
const mult = require('./core/mult.js');
const div = require('./core/div.js');
const set = require('./core/set.js');



module.exports = {

	add:(number)=> {
		return currentNumber += number;
	},
	sub:(number)=> {
		return currentNumber -= number;
	},
	mult:(number)=> {
		return currentNumber *= number;
	},
	div:(number)=> {
		return currentNumber /= number;
	},
	set:(number)=> {
		return currentNumber = number;
	}
};