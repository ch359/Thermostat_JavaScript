'use strict';

describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temp of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can raise temperature', function(){
    thermostat.up(1);
    expect(thermostat.temperature()).toEqual(21);
  });

  it('can lower temperature', function(){
    thermostat.down(10);
    expect(thermostat.temperature()).toEqual(10);
  });

  it('cannot be set lower than ten', function(){
    thermostat.down(15);
    expect(thermostat.temperature()).toEqual(10);
  });

  it('cannot set temperature above 25 if power saving is on', function(){
      thermostat._powerSavingOn = true;
      thermostat.up(10);
      expect(thermostat.temperature()).toEqual(25);
  });

  it ('cannot set temperature above 35 if power saving is off', function(){
    thermostat._powerSavingOn = false;
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(30)
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(35)
  })

});
