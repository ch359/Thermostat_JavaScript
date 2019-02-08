'use strict';



function Thermostat(){
  this._temperature = 20;
  this._minimumTemp = 10;
  this._isPowerSaving = true;
  this._resetTemperature = 20;
}

Thermostat.prototype.maximumTemperature = function(){
  if(this._isPowerSaving){
    return 25;
  }
  return 35;
};

Thermostat.prototype.temperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(temp = 1){
  let newTemp = this._temperature + temp;

  if(newTemp >= this.maximumTemperature()){
    this._temperature = this.maximumTemperature();
  }else{
    this._temperature = newTemp;
  }
};

Thermostat.prototype.down = function(temp = 1){
  if(this._temperature - temp < this._minimumTemp){
    this._temperature = this._minimumTemp;
  } else{
  this._temperature -= temp;
  }
};

Thermostat.prototype.reset = function() {
  this._temperature = this._resetTemperature;
};

Thermostat.prototype.powerSavingOff = function() {
  this._isPowerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this._isPowerSaving = true;
  if(this.temperature() > this.maximumTemperature())
    this._temperature = 25;
};

Thermostat.prototype.usage = function() {
  if(this._temperature < 18) {
    return 'low-usage'
  } else if(this._temperature < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
};

