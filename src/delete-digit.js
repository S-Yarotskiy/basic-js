const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let max = 0;
	n = n.toString();	
	for (i=0; i < n.length; i++) {
		if (n.replace(n[i],'') > max) max = n.replace(n[i],'')
	}
	return +max;
}

module.exports = {
  deleteDigit
};

