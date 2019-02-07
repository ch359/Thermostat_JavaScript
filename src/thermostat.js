'use strict';

function Thermostat(){
  this._temperature = 20;
  this._minimumTemp = 10;
  this._powerSavingOn = true;
};

Thermostat.prototype.temperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(temp){
  var newTemp = this._temperature + temp;

  if(this._powerSavingOn){
    if(newTemp > 25){
      this._temperature = 25;
    }else{
      this._temperature = newTemp;
    }
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
