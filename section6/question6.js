// 가장 마지막에 남을 왕자 (queue   shift()[][][][][][][][]push())

const solution = (p, k) => {
  let queue = [];
  for(let i = 1; i <= p; i++){
    queue.push(i);
  }

  while(queue){
    for (let i = 0; i < k; i++) {
      console.log(i);
      if (i < k - 1) {
        queue.push(queue.shift());
      } else if (i === k - 1) {
        queue.shift();
      }
    }
    if(queue.length === 1) break;
  }
  return queue;
}
console.log(solution(8, 3));