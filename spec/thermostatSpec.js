"use_strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("temperature increases with #up", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("temperature decreases with #down", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("minimum temperature is 10 degrees", function() {
    for(i = 0; i < 11; i ++) {
      thermostat.down();
    };
    expect(thermostat.temperature).toEqual(10);
  });

  it("power saving mode is on by default", function() {
    expect(thermostat.powerSave).toBe(true);
  });

  it("has max temp of 25 when power saving is on", function() {
    for(i = 0; i < 6; i ++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(25);
  });

  it("has max temp of 32 when power saving is off", function() {
    thermostat.powerSaveOff();
    for(i = 0; i < 13; i ++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(32);
  });

  it("can reset the temperature", function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("shows when energy is low usage", function() {
    for(i = 0; i < 3; i ++) {
      thermostat.down();
    };
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("shows when energy is medium usage", function() {
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("shows when energy is high usage", function() {
    for(i = 0; i < 5; i ++) {
      thermostat.up();
    };
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });
});
