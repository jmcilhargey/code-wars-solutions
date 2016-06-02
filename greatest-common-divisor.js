function euclideanDivisor(a, b) {

	if (b = 0) {
		return a;
	}
	var remainder = a % b;

	return euclideanDivisor(b, remainder);
}

console.log(euclideanDivisor(3918848, 1653264));