function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.powerSave = true;
};

Thermostat.prototype.up = function () {
  if(this.temperature === this.MAX_TEMP) {
    return;
  };
  return(this.temperature ++);
};

Thermostat.prototype.down = function () {
  if(this.temperature === this.MIN_TEMP) {
    return;
  };
  return(this.temperature --);
};
