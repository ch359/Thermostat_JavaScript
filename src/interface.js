'use strict';
let thermostat = new Thermostat();

$(document).ready(function() {
    updateTemperature();

    $('#up').on('click', function() {
        thermostat.up();
        updateTemperature();
    });

    $('#down').on('click', function() {
        thermostat.down();
        updateTemperature();
    });

    $('#reset').on('click', function() {
        thermostat.reset();
        updateTemperature();
    });

    $('#powersaving-on').on('click', function() {
        thermostat.powerSavingOn();
        updatePowerSaving();
    });

    $('#powersaving-off').on('click', function() {
        thermostat.powerSavingOff();
        updatePowerSaving();
    });

});

function updateTemperature() {
    $('#temperature').text(thermostat.temperature());
}

function updatePowerSaving() {
    $('#power-saving-status').text(powerSavingStatus())
}

function powerSavingStatus() {
    if(thermostat._isPowerSaving) {
        return 'on'
    } else {
        return 'off'
    }
}