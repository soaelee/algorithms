//일곱난쟁이를 찾자~~!
// 힌트. 일곱 난쟁이 키의 총합은 100입니다!

const solution = arr => {
	let answer = [...arr];
	let height = arr.reduce((prev, cur) => (prev += cur), 0) - 100;
	arr.sort((a, b) => a - b); //수를 탐색할때는 항상 정렬 먼저 하자!

	for (let i = 0; i < arr.length; i++) {
		for (let j = arr.length - 1; j > i; j--) {
			const sum = arr[i] + arr[j];
			if (sum < height) {
				break;
			} else if (sum === height) {
				answer.splice(j, 1);
				answer.splice(i, 1);
				return answer;
			}
		}
	}
};

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));

function solutionT(arr) {
	let answer = arr; //얕은 복사
	let sum = arr.reduce((prev, cur) => (prev += cur), 0);

	for (let i = 0; i < 8; i++) {
		for (let j = i + 1; j < 9; j++) {
			if (sum - (arr[i] + arr[j]) === 100) {
				answer.splice(j, 1);
				answer.splice(i, 1);
			}
		}
	}

	return answer;
}

console.log(solutionT(arr));
console.log(arr);
