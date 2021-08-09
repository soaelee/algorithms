// 문자열 중복 갯수
const solution = (str) => {
	let answer = [];

	let dup_cnt = 1;

	for (let i of str) {
		console.log(i, dup_cnt);
		if (answer[answer.length - 1] === i) {
			dup_cnt++;
		} else {
			if (dup_cnt > 1) {
				answer.push(dup_cnt);
			}
			answer.push(i);
			dup_cnt = 1;
		}
	}
	return answer.join("");
};

const str = "KKHSSSSSSSE";

console.log(solution(str));

const solutionT = (str) => {
	let answer = [];

	let cnt = 1;
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] === str[i + 1]) cnt++;
		else {
			answer.push(str[i]);
			if (cnt > 1) answer.push(String(cnt));
			cnt = 1;
		}
	}
	return answer;
};
console.log(solutionT(str));
