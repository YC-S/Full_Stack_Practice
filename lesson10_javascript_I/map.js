let arr = [1, 2, 3];
let f = function (v) {
  return v * 2;
};
arr.map(f);
arr.map(function (v) {
  return v * 2;
});