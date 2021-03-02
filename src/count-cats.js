const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
arrMatrix = arr;
let matrix = [];
for (let i =0; i < arrMatrix.length; i++){
    matrix = matrix.concat((arrMatrix[i]));
}

 return matrix.filter(cat => cat === '^^').length
};
