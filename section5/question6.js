// 다득표자 뽑기 (HashMap)
const solution = (str) => {
  let map = new Map();


  for(let i of str){
    if(map.has(i)){
    map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  let max = 0;
  let answer = 0;
  for(let [key, value] of map){
    if(max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
};

const str = "BACBACCACCBDEDE";

console.log(solution(str));