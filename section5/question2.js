// 공통원소구해서 오름차순으로 출력
const solution = (arr1, arr2) => {
	let answer = [];
	let p1 = 0;
	let p2 = 0;

	arr1.sort((a, b) => a - b);
	arr2.sort((a, b) => a - b);

	while (p1 < arr1.length && p2 < arr2.length) {
		if (arr1[p1] < arr2[p2]) p1++;
		else if (arr1[p1] > arr2[p2]) p2++;
		else {
			answer.push(arr1[p1++]);
			p2++;
		}
	}
	return answer;
};

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));
