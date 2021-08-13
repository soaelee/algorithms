// 팰린드롬 (65 ~ 90 / 97 ~ 122)
const solution = str => {
	let answer = 'YES';
	let afterStr = '';
	for (let i of str) {
		if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
			afterStr += String.fromCharCode(i.charCodeAt() - 32);
		} else if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
			afterStr += i;
		}
	}

	if (afterStr !== afterStr.split('').reverse().join('')) {
		answer = 'NO';
	}
	return answer;
};

const str = 'found7, time: study; Yduts;emit, 7Dnuof';
console.log(solution(str));

// 정규식을 이용해보자!
const solutionR = str => {
	let answer = 'YES';

	str = str.toLowerCase().replace(/[^a-z]/g, '');
	if (str !== str.split('').reverse().join('')) answer = 'NO';
	return answer;
};

console.log(solutionR(str));
