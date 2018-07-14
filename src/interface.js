$(document).ready(function() {
  var thermostat = new Thermostat();

  showTemp();

  $("#temperature-up").click(function() {
    thermostat.up();
    showTemp();
  });

  $("#temperature-down").click(function() {
    thermostat.down();
    showTemp();
  });

  $("#temperature-reset").click(function() {
    thermostat.reset();
    showTemp();
  });

  $("#power-saving-on").click(function() {
    thermostat.powerSaveOn();
    $("#power-saving-status").text("ON");
    showTemp();
  });

  $("#power-saving-off").click(function() {
    thermostat.powerSaveOff();
    $("#power-saving-status").text("OFF");
  });

  function showTemp() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr('class', thermostat.energyUsage());
  };
});
