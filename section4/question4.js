//가장 많이 장볼 수 있는 수
const solution = (cost, arr) => {
	let answer = 0;

	arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		let tmp_cost = cost - arr[i][0] / 2 + arr[i][1];
		let cnt = 1;
		for (let j = 0; j < arr.length; j++) {
			if (i !== j && arr[j][0] + arr[j][1] > tmp_cost) break;

			if (i !== j && arr[j][0] + arr[j][1] <= tmp_cost) {
				tmp_cost -= arr[j][0] + arr[j][1];
				cnt++;
			}
		}
		console.log("---------------");
		if (cnt > answer) answer = cnt;
	}
	return answer;
};

const arr = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3],
];

console.log(solution(28, arr));
