'use strict';

describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('has a starting temp of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  })

  it('can raise temperature', function(){
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(30);
  })

});
