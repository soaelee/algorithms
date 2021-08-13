// N일 동안의 매출기록을 주고, 연속된 K일동안의 최대 매출액
// 투포인터로 풀어보기 : 현재 문제의 시간복잡도는 일치함
const solution = (k, arr) => {
	let max = 0;
	let sum = 0;
	let lt = 0;
	for (let rt = 0; rt < arr.length; rt++) {
		sum += arr[rt];
		if (rt < k) {
			max = sum;
			continue;
		}
		sum -= arr[lt++];
		max = Math.max(max, sum);
	}
	return max;
};

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));

// Sliding Window : 창문을 그대로 밀고 간다!
const solutionW = (k, arr) => {
	let max = 0;
	let sum = 0;
	// 처음 단위는 구해놓는다
	for (let i = 0; i < k; i++) {
		sum += arr[i];
	}
	max = sum;
	for (let i = k; i < arr.length; i++) {
		// 다음날 매출은 더하고 이전 매출은 빼기
		sum += arr[i] - arr[i - k];
		max = Math.max(max, sum);
	}
	return max;
};
console.log(solution(3, arr));
