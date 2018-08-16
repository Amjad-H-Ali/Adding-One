console.log("Adding One!");

const addOne = (array, indx) => {
	// Set i equal to last index in array by default so user wont have to pass it in manually
	let i = indx === undefined ? array.length - 1 : indx;
	// If we are beyond the first digit in the array, that means all digits were 9.
	// So now all we have to do is shift every digit in the array to the right
	// And set the first index to 1
	if (i < 0) {
		array.unshift(1);
		return array;
	};
	// Just increment the digit in the array if it is less than 9 and we are done.
	if (array[i] < 9) {
		array[i] ++;
		return array;
	};

	
	// Otherwise, set it equal to 0 and carry the 1 using recursion
	array[i] = 0;
	i --;

	return addOne(array, i);
};

console.log(addOne([1, 2, 3, 4])); //1,235

console.log(addOne([9, 9, 9, 9])); //10,000

console.log(addOne([1, 2, 9, 9])); //1,300

console.log(addOne([0])); //1