let arr = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 4; i++) {
  console.log(arr[i]);
}
for (let i in arr) {
  console.log(arr[i]);
}
arr.forEach(function (item) {
  console.log(item);
});