'use strict';

describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('has a starting temp of 20', function(){
    expect(thermostat.temp()).toEqual(20);
  })

});
