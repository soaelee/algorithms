// 멘토와 멘티 짝만들기 경우의 수
// 멘토는 M번의 수학테스트 모두 멘티보다 등수가 높아야 한다

// M번 중복되는 수를 찾아 count

const solution = arr => {
	let answer = 0;
	const test_count = arr.length;
	const students = arr[0].length;
	for (let i = 1; i <= students; i++) {
		//mentor
		for (let j = 1; j <= students; j++) {
			//mentee
			if (i === j) continue;
			let cnt = 0;
			for (let test = 0; test < test_count; test++) {
				//test 횟수
				let mentee = 0;
				let mentor = 0;
				for (let rank = 0; rank < students; rank++) {
					//등수
					if (arr[test][rank] === j) mentee = rank;
					if (arr[test][rank] === i) mentor = rank;
				}
				if (mentee < mentor) cnt++;
			}
			if (cnt === test_count) answer++;
		}
	}
	return answer;
};

const arr = [
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
];

const arr1 = [
	[19, 15, 4, 17, 12, 18, 6, 3, 11, 14, 1, 8, 13, 9, 2, 20, 5, 16, 10, 7],
	[5, 20, 18, 17, 14, 11, 19, 3, 10, 16, 6, 8, 13, 9, 2, 12, 4, 7, 1, 15],
];
console.log(solution(arr1));

// string으로 합치는거 했었는데 그러면 14 + 1 === 1 + 41 일 경우가 문제
