function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.powerSave = true;
};

Thermostat.prototype.isMaxTemp = function () {
  return(this.temperature === this.MAX_TEMP);
};

Thermostat.prototype.isMinTemp = function () {
  return(this.temperature === this.MIN_TEMP);
};

Thermostat.prototype.up = function () {
  if(this.isMaxTemp()) {
    return;
  };
  return(this.temperature ++);
};

Thermostat.prototype.down = function () {
  if(this.isMinTemp()) {
    return;
  };
  return(this.temperature --);
};
