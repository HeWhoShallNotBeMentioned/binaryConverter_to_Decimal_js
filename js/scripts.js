var base = function(binary) {

	var binaryArray = binary.split('').reverse();
	var sum = 0; 

	binaryArray.forEach(function(currentValue, index){
		if (currentValue == 1) {
			sum += Math.pow(2, index);
		}
	});
	return sum;
};
