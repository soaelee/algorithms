const solution = str => {
	let answer = 0;
	for (let i of str) {
		if (i === i.toUpperCase()) answer++;
	}
	return answer;
};

console.log(solution('KoreaTimeGood'));

// 아스키코드 넘버 이용하기! charCodeAt()은 아스키코드 반환
// 외우기!
// 대문자 65 ~ 90
// 소문자 97 ~ 122
const solutionT = str => {
	let answer = 0;
	for (let i of str) {
		let num = i.charCodeAt();
		if (num >= 65 && num <= 90) answer++;
	}
	return answer;
};

console.log(solutionT('KoreaTimeGood'));
