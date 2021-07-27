// 세 변이 주어졌을 때 삼각형이 되면 YES, 아니면 NO 출력
// 가장 긴 변의 길이 < 나머지 두 변의 길이의 합
function solution(a, b, c) {
	let answer = 'YES';
	let max;
	let arr = [a, b, c];
	if (a > b) max = a;
	else max = b;
	if (c > max) max = c;

	const idx = arr.indexOf(max);
	arr.splice(idx, 1);
	answer = arr[0] + arr[1] > max ? answer : 'NO';
	return answer;
}

// 선생님 답
function solutionT(a, b, c) {
	let answer = 'YES',
		max;
	let sum = a + b + c;
	if (a > b) max = a;
	else max = b;
	if (c > max) max = c;

	if (sum - max <= max) answer = 'NO';

	return answer;
}

console.log(solutionT(13, 33, 17));
console.log(solutionT(6, 6, 6));
