// forEach, map, filter, reduce 메서드 작동원리

const a = [10, 11, 12, 13, 14, 15];

a.forEach((el, idx) => {
	console.log(el, idx);
});

let answer = a.map(el => el * el);

console.log(answer);

answer = a.filter(el => el % 2 === 0);

console.log(answer);

let sum = a.reduce((prev, cur) => (prev += cur), 0);

console.log(sum);

// 화살표함수 너무 예쁘다~
