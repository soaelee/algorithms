//큰 수 출력하기 (자기 바로 앞 수보다 큰 수만 출력)
const solution = arr => {
	let answer = [arr[0]];
	arr.filter((el, idx) => {
		if (el > arr[idx - 1]) answer.push(el);
	});
	return answer;
};

const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

const solutionT = arr => {
	let answer = [];
	answer.push(arr[0]);

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) answer.push(arr[i]);
	}
	return answer;
};

console.log(solutionT(arr));
