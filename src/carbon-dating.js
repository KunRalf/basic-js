const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(current_activity) {
  if (typeof current_activity === 'undefined' || typeof current_activity !== 'string' || isNaN(current_activity / 0) || +current_activity > 15 || +current_activity < 0) {
    return false
  }
  const up = Math.log(MODERN_ACTIVITY / +current_activity)
  const down = 0.693 / HALF_LIFE_PERIOD
  return Math.ceil(up / down)
};
