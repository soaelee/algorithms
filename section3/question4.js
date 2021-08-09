//가장 짧은 문자거리
const solution = (str, alpha) => {
	let answer = [];
	let base = [];
	for (let i = 0; i < str.length; i++) {
		if (alpha === str[i]) base.push(i);
	}
	for (let i = 0; i < str.length; i++) {
		if (alpha === str[i]) {
			answer.push(0);
			continue;
		}
		let min = Number.MAX_SAFE_INTEGER;
		for (let j = 0; j < base.length; j++) {
			if (min > Math.abs(i - base[j])) min = Math.abs(i - base[j]);
		}
		answer.push(min);
	}
	return answer;
};

const str = "teachermode";

console.log(solution(str, "e"));

// 시간복잡도를 낮추자(앞뒤로 한번씩 돌기)
const solutionT = (str, alpha) => {
	let answer = [];
	let p = 1000;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === alpha) {
			p = 0;
			answer.push(0);
		} else {
			p++;
			answer.push(p);
		}
	}
	p = 1000;
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === alpha) {
			p = 0;
		} else {
			p++;
			answer[i] = Math.min(answer[i], p);
		}
	}
	return answer;
};

console.log(solutionT(str, "e"));
