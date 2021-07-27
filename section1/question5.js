// 최솟값 구하기
function solution(...args) {
	//미정의 인자 배열로 받기, 그냥 배열로 받는 버전도 있음
	let answer = args[0];
	args.forEach(el => {
		if (el < answer) answer = el;
	});
	return answer;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));

// 선생님답
function solutionT(arr) {
	let answer,
		min = Number.MAX_SAFE_INTEGER; //안전한 Integer 중 가장 큰 값
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
	}
	answer = min;
	return answer;
}

const arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solutionT(arr));

// 내장함수로 최솟값과 최댓값 구하기  배열X, 요소로 인자넘기기
function solutionM(arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return { min, max };
}

console.log(solutionM(arr));
