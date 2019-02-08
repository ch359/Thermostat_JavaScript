'use strict';

describe ('Thermostat', function(){

  let thermostat;

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

  it('cannot be set lower than 10', function(){
    thermostat.down(15);
    expect(thermostat.temperature()).toEqual(10);
  });

  it('cannot set temperature above 25 if power saving is on', function(){
      thermostat._isPowerSaving = true;
      thermostat.up(10);
      expect(thermostat.temperature()).toEqual(25);
  });

  it ('cannot set temperature above 35 if power saving is off', function(){
    thermostat._isPowerSaving = false;
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(30);
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(35);
  });

  it('can be reset to 20', function() {
    thermostat.up(5);
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can report its usage', function() {
    expect(thermostat.usage()).toEqual('medium-usage');
    thermostat.down(10);
    expect(thermostat.usage()).toEqual('low-usage');
    thermostat._isPowerSaving = false;
    thermostat.up(20);
    expect(thermostat.usage()).toEqual('high-usage');
  });
});
