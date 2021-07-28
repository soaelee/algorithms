// A를 #으로 바꾼 단어 출력하기
const solution = str => {
	return str
		.split('')
		.map(el => {
			if (el === 'A') return '#';
			return el;
		})
		.join('');
};

console.log(solution('BANANA'));

// 선생님 답(이게 더 시간 효율적인 것 같음)
// Point! string도 for...of 가능
function solutionT(word) {
	let answer = '';
	for (let i of word) {
		if (i === 'A') answer += '#';
		else answer += i;
	}
	return answer;
}

console.log(solutionT('BANANA'));

// 정규식 사용해보기
function solutionR(word) {
	let answer = word;
	answer = answer.replace(/A/g, '#');
	return answer;
}

console.log(solutionR('BANANA'));
