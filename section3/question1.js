//회문 문자열 (앞뒤로 뒤집어도 똑같은가)
const solution = str => {
  str = str.toUpperCase();
  answer = str.split("").reverse().join('');
  return answer === str ? 'YES' : 'NO';
}

console.log(solution('goodG'));

// 참고 : 문자열 반대로 뒤집기 str.split("").reverse();

const solutionT = str => {
  str = str.toUpperCase();

  let answer = 'YES';
  for(let i = 0; i < Math.floor(str.length / 2); i++){
    if(str[i] !== str[str.length - 1 - i]){
      answer = 'NO';
      break;
    }
  }
  return answer;
}
console.log(solutionT('goodG'));