// clobbers: navigator.orientationlock

var exec = require('cordova/exec');

var orientationLock = {

	lock: function(orientation, success, fail) {
		exec(success, fail, "OrientationLock", "lock", [orientation]);
	},

	unlock: function(success, fail) {
		exec(success, fail, "OrientationLock", "unlock", []);
	}

};

module.exports = orientationLock;
