'use strict';

function Thermostat(){
  this._temperature = 20;
  this._minimumTemp = 10;

};

Thermostat.prototype.temperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(temp){
  this._temperature += temp;
};

Thermostat.prototype.down = function(temp){
  if(this._temperature - temp < 10){
    this._temperature = 10;
  } else{
  this._temperature -= temp;
  }
};
