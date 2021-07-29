// 중복 단어 제거 (set 이용)
const solution = arr => {
	return [...new Set(arr)];
};

const arr = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(arr));

// includes, indexOf 활용도 가능 (boolean, idx);

// filter 활용
const solutionF = arr => {
	return arr.filter((el, idx) => idx === arr.indexOf(el));
};
console.log(solutionF(arr));
