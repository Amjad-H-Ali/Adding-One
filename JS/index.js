console.log("Adding One!");

const addOne = (array, indx) => {
	// Set i equal to last index in array by default so user wont have to pass it in manually
	let i = indx === undefined ? array.length - 1 : indx;

	// Just increment the digit in the array if it is less than 9 and we are done.
	if (array[i] < 9) {
		array[i] ++;
		return array;
	}
	
	// Otherwise, set it equal to 0 and carry the 1 using recursion
	array[i] = 0;
	i --;
	return addOne(array, i);
};

console.log(addOne([2,3,1,2,8,9])); //231290