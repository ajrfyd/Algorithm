//! Union-find(합집합 찾기): 합집합 찾는 알고리즘.

// ! 서로소 집합 알고리즘 이라고도 함. 

// 여러개의 존재할 때, 두개의 노드를 선택해 두 노드가 서로 같은 그래프에 속하는지 판별.

// let parent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let parent = [];
for(let i = 1; i <= 10; i++) {
  parent[i] = i;
}
// console.log(arr)
// 부모 노드를 찾는 함수 parent: arr
function getParent(parent, x) {
  if(parent[x] === x) return x;
  return parent[x] = getParent[parent, parent[x]]
}
// 두 부모노드를 합치는 함수
function unionParent(parent, a, b) {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if(a < b) parent[b] = a;
  else parent[a] = b;
}
// 같은 부모를 가지는지 확인(같은 그래프에 속해 있는지)
function findParent(parent, a, b) {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if(a === b) return true; 
  else return false;  
}
unionParent(parent, 1, 2);
unionParent(parent, 2, 3);
unionParent(parent, 3, 4);
unionParent(parent, 5, 6);
unionParent(parent, 6, 7);
unionParent(parent, 7, 8);
console.log(parent)
console.log(findParent(parent, 1, 5))


