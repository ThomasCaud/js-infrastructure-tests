function add(x: number, y: number): number {
	console.log("test");
	var i = 5;
	return x + y;
}

function substract(x: number, y: number): number {
	return x - y;
}

function multiply(x: number, y: number): number {
	// pour la démo sur les tests en continu
	return 0;
}

export { add, substract, multiply };