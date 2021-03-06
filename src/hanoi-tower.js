const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hourturn = turnsSpeed / 3600;
  let turns = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(turns / hourturn);

  return {'turns' : turns, 'seconds' : time}
};
