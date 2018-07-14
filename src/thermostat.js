function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSave = true;
};

Thermostat.prototype.isMaxTemp = function () {
  if(this.powerSave === false) {
    return(this.temperature === this.MAX_TEMP_PSM_OFF);
  };
  return(this.temperature === this.MAX_TEMP);
};

Thermostat.prototype.isMinTemp = function () {
  return(this.temperature === this.MIN_TEMP);
};

Thermostat.prototype.powerSaveOff = function () {
  return(this.powerSave = false);
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

Thermostat.prototype.reset = function () {
  return(this.temperature = 20);
};
