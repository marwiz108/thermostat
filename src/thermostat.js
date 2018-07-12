function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
};

console.log("ready");

Thermostat.prototype.up = function () {
  return(this.temperature ++);
};

Thermostat.prototype.down = function () {
  if(this.temperature === this.MIN_TEMP) {
    return;
  };
  return(this.temperature --);
};
