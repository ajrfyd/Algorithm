//! MergeSort(병합정렬): 분할정복의 한 종류 O(N * logN)

// 병합정렬은 확실하게 반을 나눠 최악의 경우에도 O(N * logN)의 시간복잡도를 보장한다.
let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];


function mergeSort(arr) {
  let leng = arr.length;
  let mid = Math.floor(leng/ 2);
  let result = []

  if(leng <= 1) {
    return arr;
  }

  let front = mergeSort(arr.slice(0, mid))
  let end = mergeSort(arr.slice(mid,))
  
  while(front.length !== 0 && end.length !==0) {
    if(front[0] < end[0]) {
      result.push(front.shift())
    } else {
      result.push(end.shift())
    }
  }

  while(front.length !== 0) {
    result.push(front.shift())
  }
  
  while(end.length !== 0) {
    result.push(end.shift())
  }
  
  
  return result;
}
console.log(mergeSort(arr))