(function (window) {
	var goodSpeaker = {};
	var speakWord = "Good Bye";
	goodSpeaker.speak = function(name) {
	console.log(speakWord + " " + name);
	}
	window.goodSpeaker = goodSpeaker;
})(window);