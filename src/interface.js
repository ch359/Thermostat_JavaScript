'use strict';

$(document).ready(function() {
    let thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature());

    $('#up').on('click', function() {
        thermostat.up();
        $('#temperature').text(thermostat.temperature());
    })
});