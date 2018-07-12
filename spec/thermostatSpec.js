"use_strict";

describe("Thermostat", function() {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toBe(20)
  });

  it("temperature increases with #up", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("temperature decreases with #down", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
});
