// 올바른 괄호
// 괄호 혹은 짝을 짓는 문제는 스택으로 풀어보자!
const solution = str => {
	let answer = 'YES';
	const stack = [];

	for (let i of str) {
		if (i === '(') stack.push(i);
		else stack.pop();
	}
	if (stack.length > 0) return 'NO';
	return answer;
};
const str = '(()(()))(()';

console.log(solution(str));
