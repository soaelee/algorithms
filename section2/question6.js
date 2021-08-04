//격자판 최대합
const solution = arr => {
	const n = arr.length;
	let sum_row_col = 0;
	let sum_cross_left = 0;
	let sum_cross_right = 0;
	for (let i = 0; i < n; i++) {
		let tmp_row = 0;
		let tmp_col = 0;
		sum_cross_right += arr[i][n - 1 - i]; // 우대각선
		for (let j = 0; j < n; j++) {
			if (i === j) sum_cross_left += arr[i][j]; // 좌대각선
			tmp_row += arr[i][j]; // 가로합
			tmp_col += arr[j][i]; // 세로합
		}
		sum_row_col = Math.max(tmp_row, tmp_col);
	}
	return Math.max(sum_row_col, sum_cross_right, sum_cross_left);
};

const arr = [
	[10, 13, 10, 12, 15], //i = 0, j = 0 ~ 4
	[12, 39, 30, 23, 11], //i = 1, j = 0 ~ 4
	[11, 25, 50, 53, 15], //i = 2, j = 0 ~ 4
	[19, 27, 29, 37, 27], //i = 3, j = 0 ~ 4
	[19, 13, 30, 13, 19], //i = 4, j = 0 ~ 4
];
// arr[행][열]
console.log(solution(arr));
