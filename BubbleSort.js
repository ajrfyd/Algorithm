//! BubbleSort(버블정렬) : 가까이 있는 두 숫자끼리 비교해 작은 숫자를 앞으로 보내는 정렬

// 옆이 있는 값과 비교해 더 작은 값을 보내면 어떨까?

// 선택, 버블, 삽입정렬 중 가장 효율성이 떨어짐. 

// 선택정렬은 가장 작은값을 선택해 마지막에 교체해 줘야 하지만 

// 버블정렬은 매번 옆의 값과 비교해서 바꿔 줘야 하기 때문에 선택정렬보다 더 오래걸림

let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let tmp = 0;

function sol(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length -1 - i; j++) {
      // 마지막에 가장 큰 숫자가 와야 하기 떄문에 안쪽 반복문은 줄어든다 
      if(array[j] > array[j + 1]) {
        // 앞의 숫자와 뒤의 숫자를 비교해
        tmp = array[j]
        array[j] = array[j + 1]
        arr[j + 1] = tmp;
        // 큰 수를 뒤로 바꿔준다
        // 한번 루프가 돌게되면 가장 큰 숫자는 마지막에 있게 된다. 
      }
    }

  }
  return array;
}

// N * (N + 1) / 2

// O(N * N)

// O(N^2)

// 


console.log(sol(arr))