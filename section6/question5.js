// 레이저로 자른 쇠막대기의 개수
const solution = str => {
	let answer = 0;
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		let tmp = str[i];
		if (tmp === '(') stack.push(tmp);
		else {
			stack.pop();
			if (str[i - 1] === '(') answer += stack.length;
			// 레이저로 자르기
			else answer++; // 쇠막대기가 끝나는 부분으로 더하기 1
		}
	}
	return answer;
};

const str = '()(((()())(())()))(())'; // 17
const str1 = '(((()(()()))(())()))(()())'; // 24

console.log(solution(str1));

// () : (((()())(())()))(()) = 0
// (((() : (((())(())()))(()) = 3
// (((() : ((()(())()))(()) = 3
// ((() : (((())()))(()) = 2
// (((() : ((()()))(()) = 3
// ((() : ((()))(()) = 2
// ((() : (())(()) = 2
// (() : ()(()) = 1
// () : (()) = 0
// (() : () = 1
// () : None

// total: 17개
