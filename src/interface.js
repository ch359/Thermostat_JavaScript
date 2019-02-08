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
        updateTemperature()
    });

    $('#powersaving-off').on('click', function() {
        thermostat.powerSavingOff();
        updatePowerSaving();
    });

    $.getJSON( 'http://api.openweathermap.org/data/2.5/weather', {
        q: 'London',
        units: 'metric',
        APPID: '9ffd6ea68429e495554bbb505107a4d9'
    }, function(data) {
        $('#current_temperature').text(data.main.temp);
    });
});

function updateTemperature() {
    $('#temperature').text(thermostat.temperature());
    $('#temperature').attr('class', thermostat.usage());
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