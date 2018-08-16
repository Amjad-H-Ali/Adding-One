console.log("Adding One!");

const addOne = (array, indx) => {
	// Set i equal to last index in array by default so user wont have to pass it in manually
	const i = indx === undefined ? array.length - 1 : indx;

	if (array[i] < 9) {
		array[i] ++;
	}
	return array;


};

console.log(addOne([2,3,1,2,8,6]));