//문자열에서 자연수만들기
const solution = str => {
	str = str.replace(/[^0-9]/g, '');
	return +str;
};

const str = 'g0en2T0s8eSoft';
const str2 = 'tge0a1h205er';
console.log(solution(str2));

//isNaN이용하기(Not a Number : 매개변수가 숫자인지 검사)
const solutionT = str => {
	let answer = '';
	for (let i of str) {
		if (!isNaN(i)) answer += i;
	}
	return parseInt(answer);
};
console.log(solutionT(str2));
