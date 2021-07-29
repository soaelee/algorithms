// 중복 문자 제거(includes 활용)
const solution = str => {
	let answer = '';
	for (let i of str) {
		if (!answer.includes(i)) answer += i;
	}
	return answer;
};

const str = 'ksekkset';
console.log(solution(str));

// indexOf 활용, 없을 땐 -1 반환을 이용해도 됨
const solutionT = str => {
	let answer = '';
	//console.log(str.indexOf('k', 1));
	for (let i = 0; i < str.length; i++) {
		console.log(str[i], i, str.indexOf(str[i]));
		if (i === str.indexOf(str[i])) answer += str[i];
	}
	return answer;
};

console.log(solutionT(str));

// SET 활용해보기
const solutionS = str => {
	return [...new Set(str.split(''))].join('');
};
console.log(solutionS(str));
