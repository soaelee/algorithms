//가위바위보 (1: 가위, 2: 바위, 3: 보) 이긴사람 출력, 비기면 D
const solution = (A, B) => {
	let answer = [];

	for (let i = 0; i < A.length; i++) {
		if (A[i] === B[i]) answer.push('D');
		else {
			if ((A[i] === 3 && B[i] === 1) || (A[i] === 1 && B[i] === 3)) {
				answer.push(A[i] === 3 ? 'B' : 'A');
			} else {
				answer.push(A[i] > B[i] ? 'A' : 'B');
			}
		}
	}
	return answer;
};

const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];

console.log(solution(A, B));
