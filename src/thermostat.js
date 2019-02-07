'use strict';

function Thermostat(){
  this._temperature = 20;
  this._minimumTemp = 10;
  this._powerSavingOn = true;
};

Thermostat.prototype.maximumTemperature = function(){
  if(this._powerSavingOn){
    return 25;
  }
  return 35;
};

Thermostat.prototype.temperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(temp){
  var newTemp = this._temperature + temp;

  if(newTemp >= this.maximumTemperature()){
    this._temperature = this.maximumTemperature();
  }else{
    this._temperature = newTemp;
  }
};

Thermostat.prototype.down = function(temp){
  if(this._temperature - temp < 10){
    this._temperature = 10;
  } else{
  this._temperature -= temp;
  }
};
