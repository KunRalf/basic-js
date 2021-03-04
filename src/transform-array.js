const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let tmp1 = [];
  let tmp2 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next': {
          arr[i] = arr[i+1];
          break;
      }
      case '--discard-next': {
          tmp1 = arr.slice(0, i);
          tmp2 = arr.slice(i, arr.length).shift();
          arr = tmp1.concat(tmp2);
          i = 0;
          break;
      }
      case '--double-prev': {
          arr[i] = arr[i-1];
          break;
      }
      case '--discard-prev': {
        tmp1 = arr.slice(0, i).pop();
        tmp2 = arr.slice(i, arr.length);
        arr = tmp1.concat(tmp2);
        i = 0;
        break;
      }

    }
  }
  return arr;
};
