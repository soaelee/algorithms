// 가운데 문자 반환(홀수는 한개, 짝수는 두개)
const solution = str => {
	let mid = Math.floor(str.length / 2);
	if (str.length % 2 === 0) {
		mid = str.length / 2 - 1;
		return str.substr(mid, 2);
	}
	return str.substr(mid, 1);
};

const str = 'study';
console.log(solution(str));

// substring 이용하기
const solutionS = str => {
	let answer;
	let mid = Math.floor(str.length / 2);

	if (str.length % 2 === 1) answer = str.substring(mid, mid + 1);
	else answer = str.substring(mid - 1, mid + 1);

	return answer;
};

console.log(solutionS(str));

/*
substr : (start, [cnt]);
substring : (from, [to]);
*/
