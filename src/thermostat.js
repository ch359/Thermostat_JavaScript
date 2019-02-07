'use strict';

function Thermostat(){
  this._temperature = 20;
  this._minimumTemp = 10;
  this._powerSavingOn = true;
  this._resetTemperature = 20;
}

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
  let newTemp = this._temperature + temp;

  if(newTemp >= this.maximumTemperature()){
    this._temperature = this.maximumTemperature();
  }else{
    this._temperature = newTemp;
  }
};

Thermostat.prototype.down = function(temp){
  if(this._temperature - temp < this._minimumTemp){
    this._temperature = this._minimumTemp;
  } else{
  this._temperature -= temp;
  }
};

Thermostat.prototype.reset = function() {
  this._temperature = this._resetTemperature;
};
