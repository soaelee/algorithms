// 연속 부분수열의 합이 M이하가 되는 경우
const solution = (m, arr) => {
	let answer = 0;
	let p2 = 0;
	let sum = 0;
	for (let p1 = 0; p1 < arr.length; p1++) {
		sum = 0;
		p2 = p1;
		while (sum <= m) {
			sum += arr[p2++];
			if (sum <= m) {
				answer++;
			}
		}
	}
	return answer;
};
const arr = [1, 3, 1, 2, 3];
const arr2 = [1, 1, 1, 1];
const arr3 = [6, 6, 6, 6];
console.log(solution(5, arr2));

// rt - lt + 1 을 이용해보자
const solutionT = (m, arr) => {
	let answer = 0;
	let lt = 0;
	let sum = 0;
	for (let rt = 0; rt < arr.length; rt++) {
		sum += arr[rt];
		while (sum > m) {
			sum -= arr[lt++];
		}
		answer += rt - lt + 1;
	}
	return answer;
};

console.log(solutionT(5, arr3));
