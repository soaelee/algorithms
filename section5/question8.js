const solution = (str, base) => {
  let answer = 0;
  let baseMap = new Map();
  let strMap = new Map();
  
  for(let i of base){
    if(!baseMap.has(i)) baseMap.set(i, 1);
    else baseMap.set(i, baseMap.get(i) + 1);
  }

  const len = base.length - 1;
  for(let i = 0; i < len; i++){
    if (!strMap.has(i)) strMap.set(str[i], 1);
    else strMap.set(i, strMap.get(str[i]) + 1);
  }

  let lt = 0;
  for (let rt = len; rt < str.length; rt++) {
    if (!strMap.has(str[rt])) strMap.set(str[rt], 1);
    else strMap.set(str[rt], strMap.get(str[rt]) + 1);
    console.log(strMap);

    if (compareMaps(baseMap, strMap)) answer++;
    
    strMap.set(str[lt], strMap.get(str[lt]) - 1);
    if(strMap.get(str[lt]) === 0) strMap.delete(str[lt]);
    lt++;
  }
  return answer;
}

const compareMaps = (map1, map2) => {
  if(map1.size !== map2.size) return false;

  for(let [key, value] of map1){
    if (!map2.has(key) || value !== map2.get(key)) return false;
  }
  return true;
}
const str = 'bacaAacba';
console.log(solution(str, 'abc'));