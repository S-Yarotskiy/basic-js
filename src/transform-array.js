const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
	let resArr = Array.from(arr);
	for (let i = 0; i < resArr.length; i++) {
	
		if (resArr[i] === '--discard-next') {
			resArr[i] = 'del';
			resArr[i+1] = 'del';
		}

		if (resArr[i] === '--discard-prev') {
			resArr[i] = 'del';
			resArr[i-1] = 'del';
		}

		if (resArr[i] === '--double-next') {
			resArr[i] = resArr[i+1];
		}

		if (resArr[i] === '--double-prev') {
			resArr[i] = resArr[i-1];
		}
	}
	return resArr.filter(item => item !== 'del' && item !== undefined);
}

module.exports = {
  transform
};

/*let arr = ['--discard-next', 1, 2, 3, 4, 5];
let resArr = arr;
	/*for (let i = 0; i < arr.length; i++) {
		resArr.push(arr[i]);
		if (arr[i] === '--discard-next' && arr[i+1] != undefined) {
			resArr[i] = arr[i+2];
			i = i + 2;
		}
		resArr[0] = 'del';
		resArr[-1] = 'del';
		
	
console.log(resArr.filter(e => e !== 'del'));
console.log(resArr.length);
// console.log(resArr[5]);*/
