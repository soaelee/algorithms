//괄호사이의 문자 제거
const solution = str => {
	let stack = [];

	for (let i of str) {
		if (i !== ')') stack.push(i);
		else {
			let flag = true;
			while (flag) {
				let tmp = stack.pop();
				if (tmp === '(') flag = false;
			}
		}
	}
	return stack.join('');
};

const str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
