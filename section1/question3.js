// n명 학생에게 필요한 연필의 다스 수
function solution(n) {
	let answer = Math.ceil(n / 12);
	return answer;
}

console.log(solution(178));

/* 
  Math 함수
  올림 : ceil();
  내림 : floor();
  반올림 : round();
  - n 자릿수 반올림을 할 경우엔
    Math.round(x / n) * n;
    ex) 10자릿수 반올림 : Math.round(344 / 10) * 10;
  정수반환 : trunc();
  제곱근 : sqrt();
  랜덤 : random();
  절댓값 : abs();
*/
