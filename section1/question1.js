//세개의 수 중 최솟값을 출력하기 (정렬사용 X)
function solution(a, b, c) {
	let answer;
	if (a < b) answer = a;
	else answer = b;
	if (c < answer) answer = c;
	return answer;
}
console.log(solution(2, 5, 1));

//정렬을 이용해보자
function sortSolution(a, b, c) {
	const answer = [a, b, c];
	answer.sort((a, b) => a - b); // b - a는 내림차순
	return answer;
}

console.log(sortSolution(2, 6, 10));

// BONUS! 객체 정렬하기
function sortObjectArr(obj) {
	const arr = [
		{ name: 'soae', age: 28 },
		{ name: 'eunae', age: 15 },
		{ name: 'jaemoon', age: 29 },
	];
	arr.sort((a, b) => a.age - b.age);
	return arr;
}

console.log(sortObjectArr());
