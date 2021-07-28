// 문자 찾기 (해당 특정문자가 문자열에 몇 개 존재하는지 알아내기)
const solution = (str, chr) => {
	let answer = 0;

	for (let i of str) {
		if (i === chr) answer++;
	}
	return answer;
};

console.log(solution('COMPUTERPROGRAMMING', 'R'));

// 내장함수 사용해보기
// 기준을 split의 구분자로 사용해서 -1
const solutionM = (str, chr) => {
	let answer = s.split(chr).length;

	return answer - 1;
};

console.log(solutionM('COMPUTERPROGRAMMING', 'R'));
