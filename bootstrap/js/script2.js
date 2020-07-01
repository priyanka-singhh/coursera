(function(window) {
	var singhGreeter = {};
	singhGreeter.name ="Singh";
	singhGreeter.sayhi = function() {
		console.log("Hi " + singhGreeter.name);
	}
	window.singhGreeter = singhGreeter;
})(window);