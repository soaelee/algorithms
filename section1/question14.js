//가장 긴 문자열
const solution = arr => {
	let answer = '';
	for (let i of arr) {
		if (answer.length < i.length) answer = i;
	}
	return answer;
};

const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arr));
