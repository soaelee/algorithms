// 뒤집은 수가 소수일 경우 출력

const isPrime = num => {
	if (num === 1) return false;
	for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		// 제곱근
		if (num % i === 0) return false;
	}
	return true;
};
const solution = arr => {
	let answer = [];
	for (let i of arr) {
		let reverse_num = Number(i.toString().split('').reverse().join(''));
		if (isPrime(reverse_num)) answer.push(reverse_num);
	}
	return answer;
};

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));

const solutionT = arr => {
	let answer = [];
	for (let i of arr) {
		let reverse_num = 0;
		while (i) {
			let tmp = i % 10;
			reverse_num = reverse_num * 10 + tmp;
			i = parseInt(i / 10);
		}
		if (isPrime(reverse_num)) answer.push(reverse_num);
	}
	return answer;
};
