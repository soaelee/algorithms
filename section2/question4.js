// 점수계산 (가산점포함)
const solution = arr => {
	let answer = 0;
	arr.reduce((prev, cur) => {
		if (cur === 0) return (prev = 1);
		else {
			answer += prev;
			return (prev += 1);
		}
	}, 1);
	return answer;
};

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

//누적은 count로 간단하게!
const solutionT = arr => {
	let answer = 0;
	let cnt = 0;
	for (let i of arr) {
		if (i === 1) {
			answer += ++cnt;
		} else cnt = 0;
	}
	return answer;
};

console.log(solutionT(arr));
