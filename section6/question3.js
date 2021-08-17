//카카오(크레인 인형뽑기)
const solution = (arr, moves) => {
	let answer = 0;
	const stack = [];
	let length = moves.length;

	for (let i = 0; i < length; i++) {
		console.log(`moves: ${moves[i]}`);
		let rt = 0;
		while (rt < arr.length) {
			const item = arr[rt][moves[i] - 1];
			if (item !== 0) {
				console.log(item);
				if (stack[stack.length - 1] === item) {
					stack.pop();
					answer += 2;
				} else {
					stack.push(item);
				}
				arr[rt][moves[i] - 1] = 0;
				break;
			}
			rt++;
		}
	}
	console.log(stack);
	return answer;
};

const arr = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(arr, moves));

// 4, 3, 1, 1
