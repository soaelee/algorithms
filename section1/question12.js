// 대문자로 통일
const solution = str => {
	return str.toUpperCase();
};

const str = 'ItisTimeToStudy';

console.log(solution(str));

// 아스키코드로 변환해보기(65 ~ 90 / 97 ~ 122)

const solutionA = str => {
	let answer = '';
	for (let i of str) {
		if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
			answer += String.fromCharCode(i.charCodeAt() - 32);
		} else {
			answer += i;
		}
	}
	return answer;
};

console.log(solutionA(str));
