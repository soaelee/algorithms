// 자릿수의 합이 최대인 자연수
const solution = arr => {
	let answer = [];
	let max = 0;
	arr.forEach(el => {
		const string_num = String(el);
		let sum = 0;
		for (let i of string_num) sum += parseInt(i);

		if (sum >= max) {
			max = sum;
			answer.push(el);
		}
	});
	return Math.max(...answer);
};

const arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(arr));

// 10의 나머지 이용하기
const solutionT = arr => {
	let answer = 0;
	let max = 0;
	for (let i of arr) {
		let sum = 0;
		let tmp = i;
		while (tmp) {
			sum += tmp % 10;
			tmp = Math.floor(tmp / 10);
		}
		if (sum >= max) {
			max = sum;
			answer = Math.max(answer, i);
		}
	}
	return answer;
};

console.log(solutionT(arr));

// reduce 이용
const solutionR = arr => {
	let answer = 0;
	let max = 0;
	for (let i of arr) {
		let sum = i
			.toString()
			.split('')
			.reduce((prev, cur) => (prev += Number(cur)), 0);
		if (sum >= max) {
			max = sum;
			answer = Math.max(answer, i);
		}
	}

	return answer;
};
