"use_strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toBe(20);
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
});
