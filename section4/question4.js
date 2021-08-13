//가장 많이 장볼 수 있는 수 (가격 + 배송비 : 총 비용 기준으로 정렬)
const solution = (cost, product) => {
	let answer = 0;

	product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

	for (let i = 0; i < product.length; i++) {
		let total_cost = cost - product[i][0] / 2 + product[i][1];
		let cnt = 1;

		for (let j = 0; j < product.length; j++) {
			if (i === j) continue;
			let item_cost = product[j][0] + product[j][1];
			if (item_cost > total_cost) break;
			if (item_cost <= total_cost) {
				total_cost -= item_cost;
				cnt++;
			}
		}
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
