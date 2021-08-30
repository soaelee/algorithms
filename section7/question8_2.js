// 최소 구명보트 수 (Greedy, 당장 최적의 선택)
const solution = (people, limit) => {
  let len = people.length - 1;
  people.sort((a, b) => a - b);
  let i = 0;
  for (i = 0, j = len; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  //최대 구명보트 수는 사람 수 - 보트 수 i
  return people.length - i;
};
const arr = [20, 75, 30, 15, 80, 100, 12, 135];
//console.log(solution(arr, 100));

// 체육복 수 
const solutionS = (students, lost, reverse) => {
  const lostStudents = lost.filter(lost_s => {
    const good_s = reverse.find(student => Math.abs(lost_s - student) <= 1);
    if(!good_s) return true;
    reverse = reverse.filter(el => el !== good_s);
  })
  return students - lostStudents.length;
}

console.log(solutionS(5, [2, 4], [1, 3, 5]));
console.log(solutionS(5, [2, 4], [3]));