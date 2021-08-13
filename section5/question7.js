//아나그램
const solution = (str1, str2) => {
  let answer = 'YES';
  let map = new Map();
  for(let i of str1){
    if(map.has(i)){
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  for(let i of str2){
    if(!map.has(i) || map.get(i) === 0) {
      answer = 'NO';
      break;
    }
    map.set(i, map.get(i) - 1);
  }
  return answer;
}

const str1 = 'AbaAeCe';
const str2 = 'baeeACA';

console.log(solution(str1, str2))