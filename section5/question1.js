// 두 배열 오름차순으로 합치기
const solution = (arr1, arr2) => {
	return [...arr1, ...arr2].sort((a, b) => a - b);
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));

// 투포인터로 풀어봅시당
const solutionP = (arr1, arr2) => {
	const answer = [];
	let point1 = 0;
	let point2 = 0;

	while (point1 < arr1.length && point2 < arr2.length) {
		if (arr1[point1] <= arr2[point2]) {
			answer.push(arr1[point1++]);
		} else {
			answer.push(arr2[point2++]);
		}
	}

	while (point1 > arr.length) answer.push(arr1[point1++]);

	while (point2 > arr.length) answer.push(arr2[point1++]);
};
