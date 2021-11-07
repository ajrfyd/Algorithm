// 정렬 : 정렬만큼 알고리즘의 효율성 차이를 극명하게 보여주는 것이 없다. 
//! SelectionSort(선택정렬) : 가장 작은 것을 선택해서 제일 앞으로 보내면 어떨까??
let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

function sol(array) {
  let tmp = 0;
  let idx = 0; 
  for (let i = 0; i < array.length; i++) {
    let min = Number.MAX_SAFE_INTEGER; // 가장 큰 값으로 초기화
    // 가장 작은 값이 반복문 밖에 있으면 계속 가장 작은 값만 들어있기 때문에 반복문 안에서 매번 초기화💡
    for(let j = i; j < array.length; j++) {
      if(min > array[j]) {
        min = array[j] // 가장 큰 값으로 초기화 해 놓은 숫자보다 작다면 
        idx = j; //  그 인덱스를 저장하고
      }
    }
    tmp = array[i] // 임시 변수에 배열의 가장 처음 원소를 넣고
    array[i] = array[idx]; // 안쪽 반복문에서 구한 가장 작은 값의 인덱스를 배열의 처음에 넣고 
    array[idx] = tmp; // 임시변수에 넣어 놨던 빼 놯던 값을 작은값의 원래 인덱스에 넣는다.
  }
  return array;
}

// 10 + 9 + 8 ... + 1 등차수열 

// 10 * 10(10 + 1) / 2 = 55

// N * (N + 1) / 2

// O(N * N)

// O(N^2) 시간복잡도, 비효율적 알고리즘

// 

console.log(sol(arr));
