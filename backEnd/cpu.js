var OsUtils 	= require('os-utils');

var bCpu = function (moduleSysMngr) {
    this.moduleSysMngr = moduleSysMngr;    
}

bCpu.prototype.getCpuValue = function (callBack) {
   OsUtils.cpuUsage(function(value) { 
       callBack(value);
   });
}

module.exports = bCpu;