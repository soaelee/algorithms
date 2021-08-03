//보이는 학생 (앞 사람보다 크면 보이고, 작거나 같으면 보이지 않는다.)
const solution = arr => {
	let answer = 1;
	for (let i = 1; i < arr.length; i++) {
		let flag = true;
		for (let j = 0; j < i; j++) {
			if (arr[i] <= arr[j]) flag = false;
		}
		if (flag) answer++;
	}
	return answer;
};

const arr = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(arr));

// 시간복잡도를 낮추기 (max보다 크면 보이는 것)

const solutionT = arr => {
	let answer = 1;
	let max = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (max < arr[i]) {
			answer++;
			max = arr[i];
		}
	}
	return answer;
};

console.log(solutionT(arr));
