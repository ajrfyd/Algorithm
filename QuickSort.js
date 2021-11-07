// QuickSort 

// 대표적인 분할정복 알고리즘

// 하나의 문제를 두개의 작은 문제로 분할하여 정렬

// 특정한 값을 기준으로 큰숫자와 작은숫자를 서로 교환한 뒤 배열을 반으로 나눔

// 기준값을 Pivot이라고 한다. 보통 첫번째 값을 피벗값으로 설정한다.

let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

const quickSort = function (arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]); // pivot 값보다 작으면 왼쪽에 넣고
    else right.push(arr[i]); // pivot 값보다 크면 오른쪽에 넣는다.
  }

  const lSorted = quickSort(left); // pivot 왼쪽 재귀
  const rSorted = quickSort(right); // pivot 오른쪽 재귀
  return [...lSorted, pivot, ...rSorted];
};
console.log(quickSort(arr))


// O(N logN)