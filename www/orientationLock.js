(function(cordova) {

	function OrientationLock() { }

	OrientationLock.prototype.lock = function(orientation, success, fail) {
		return cordova.exec(success, fail, "OrientationLock", "lock", [orientation]);
	};

	OrientationLock.prototype.unlock = function(success, fail) {
		return cordova.exec(success, fail, "OrientationLock", "unlock", []);
	};

	OrientationLock.install = function() {
		if (!window.plugins) {
			window.plugins = {};
		}
		window.plugins.orientationLock = new OrientationLock();
		// backward compatible
		window.orientationLock = navigator.orientationLock = window.plugins.orientationLock;
	};

	if (cordova) cordova.addConstructor(OrientationLock.install);

})(window.cordova || window.Cordova || window.PhoneGap);
