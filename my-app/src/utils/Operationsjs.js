function pow(x, y) {
	return Math.pow(x, y);
}

async function add(a, b) {
	return Promise.resolve(a + b);
}

export { pow, add };