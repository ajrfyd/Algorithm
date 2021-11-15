//! CountingSort(버블정렬) : 크기를 기준으로 갯수를 세는 정렬

// 범위조건이 있는 경우에 한해서 굉장히 빠른 정렬속도를 보인다. O(N)

// 크기를 기준으로 갯수만 세주면 되어 위치를 바꿀 필요가 없고, 데이터를 한번씩만 접근해도 된다.

const arr = [
  1,3,2,4,3,2,5,3,1,2,
  3,4,4,3,5,1,2,3,5,2,
  3,1,4,3,5,1,2,1,1,1
];

function sol(array) {
  let count = new Array(5).fill(0);
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    count[array[i] - 1]++ // arr에는 1에서 5까지의 숫자밖에 없고, count[0 ~ 4] 까지 arr의 원소별 1씩 증가 
  } // [8, 6, 8, 4, 4] 1이 8개 2가 6개 이런 식으로 갯수가 세어진다.
  for(let i = 0; i < count.length; i++) {
    let num = new Array(count[i]).fill(i + 1) // count[i] 에 적힌 갯수만큼 1부터 5까지 넣어줌
    sorted = sorted.concat(num)
  }
  return sorted;
}



console.log(sol(arr))