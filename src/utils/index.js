const add = (a, b) => {
	return a + b;
};

const testPromise = new Promise(resolve => {
	resolve(111);
});

export {
	add,
	testPromise
};
