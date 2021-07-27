// 7개의 자연수 중 홀수를 골라 합을 구하고, 최솟값을 찾기
function solution(arr) {
	let sum = 0;
	let min = Number.MAX_SAFE_INTEGER;
	arr.forEach(el => {
		if (el % 2 === 1) {
			sum += el;
			if (el < min) min = el;
		}
	});
	return [sum, min];
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// for ... of : arr
function solutionT(arr) {
	let answer = [];
	let sum = 0;
	let min = Number.MAX_SAFE_INTEGER;
	for (let i of arr) {
		if (x % 2 === 1) {
			sum += i;
			if (i < min) min = i;
		}
	}
	answer.push(sum);
	answer.push(min);

	return answer;
}

console.log(solutionT(arr));
