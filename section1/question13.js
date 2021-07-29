// 대소문자 변환
const solution = str => {
	let answer = '';
	for (let i of str) {
		if (i.toUpperCase() === i) answer += i.toLowerCase();
		else answer += i.toUpperCase();
	}
	return answer;
};

console.log(solution('StuDY'));
