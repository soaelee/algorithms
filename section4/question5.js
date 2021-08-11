//k번째 큰 수, 카드는 세 장 뽑을것
const solution = (k, arr) => {
	let answer = [];
	let len = arr.length;
	let sum_arr = new Set();
	for (let i = 0; i < len - 2; i++) {
		for (let j = i + 1; j < len - 1; j++) {
			for (let k = j + 1; k < len; k++) {
				sum_arr.add(arr[i] + arr[j] + arr[k]);
			}
		}
	}

	answer = [...sum_arr].sort((a, b) => b - a);
	return answer[k - 1];
};

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(3, arr));
