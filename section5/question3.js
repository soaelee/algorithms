//연속 부분수열
const solution = (m, arr) => {
	let answer = 0;
	for (let i = 0; i < arr.length; i++) {
		let j = i;
		let sum = 0;
		while (j < arr.length && sum <= m) {
			if (sum + arr[j] > m) break;
			sum += arr[j];
			j++;
		}
		if (sum === m) answer++;
	}
	return answer;
};

const arr = [1, 2, 1, 3, 1, 1, 1, 2];
//2, 1, 3 ,, 1, 3, 1, 1, ,,, 3, 1, 1, 1,
console.log(solution(6, arr));

// 투포인터! 인마! 한배열에서도 가능
const solutionP = (m, arr) => {
	let answer = 0;
	let sum = 0;
	let lt = 0;
	for (let rt = 0; rt < arr.length; rt++) {
		sum += arr[rt];
		if (sum === m) answer++;
		while (sum >= m) {
			sum -= arr[lt++];
			if (sum === m) answer++;
		}
	}
	return answer;
};

console.log(solutionP(6, arr));

const solutionW = (m, arr) => {
	let answer = 0;
	let rt = 0;
	let lt = 0;
	let sum = 0;
	while (rt < arr.length && lt <= rt) {
		if (sum < m) {
			sum += arr[rt++];
		} else {
			sum -= arr[lt++];
		}
		if (sum === m) answer++;
	}
	return answer;
};

console.log(solutionW(6, arr));
