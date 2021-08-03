// 등수구하기
const solution = arr => {
	let answer = [...arr];
	let desc = [...new Set(answer.sort((a, b) => b - a))];
	answer = arr.map(el => desc.indexOf(el) + 1);
	return answer;
};

const arr = [87, 89, 92, 100, 76, 87];
console.log(solution(arr));

const solutionT = arr => {
	const n = arr.length;
	// 배열같은 길이, 값은 1로 초기화
	let answer = Array.from({ length: n }, () => 1);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[j] > arr[i]) answer[i]++;
		}
	}
	return answer;
};
console.log(solutionT(arr));
