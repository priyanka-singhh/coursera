(function(){
	var PriGreeter = {};
	PriGreeter.name =" Prsi";
	var greeting = "Hello";
	PriGreeter.sayhello = function () {
		console.log(greeting + PriGreeter.name);
	}
	window.PriGreeter = PriGreeter;
})(window);