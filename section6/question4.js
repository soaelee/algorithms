// 후위식연산(postfix)
// original : 3 * ( 5 + 2 ) - 9
const solution = str => {
	let stack = [];

	for (let i of str) {
		if (!isNaN(i)) {
			stack.push(Number(i));
		} else {
			let second = stack.pop();
			let first = stack.pop();
			if (i === '+') stack.push(first + second);
			else if (i === '-') stack.push(first - second);
			else if (i === '*') stack.push(first * second);
			else stack.push(first / second);
		}
		console.log(stack);
	}
	return stack[stack.length - 1];
};

const str = '352+*9-';

console.log(solution(str));

// [3, 5, 2]
// [3, 7]
// [21]
// [21, 9]
// [12]
