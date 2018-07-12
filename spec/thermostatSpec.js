"use_strict";

describe("Thermostat", function() {
  var thermostat = new Thermostat();

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toBe(20)
  });
});
