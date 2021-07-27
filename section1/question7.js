// 차량 10부제 위반챠량 세기
function solution(arr) {
	let day = String(0);
	let answer = 0;
	arr.forEach(el => {
		const tmpString = String(el).split('');
		if (day === tmpString[1]) {
			answer++;
		}
	});

	return answer;
}

const arr = [25, 30, 11, 20, 53, 17, 33];
console.log(solution(arr));

// 왜 나눌 생각을 못했니, 1의 자리 구할땐 10으로 나눈 나머지!!
function solutionT(day, arr) {
	let answer = 0;

	for (let i of arr) {
		if (i % 10 === day) answer++;
	}
	return answer;
}

console.log(solutionT(0, arr));
