(function(window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	
	for(var i in names){

		var firstLetter = ((names[i]).charAt(0)).toLowerCase();
		if(firstLetter == 'j'){
			window.goodSpeaker.speak(names[i]);
		}
		else{
			window.helloSpeaker.speak(names[i]);
		}
	}
})(window);