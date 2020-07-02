(function(window) {
	var names=["Pri","Jhon","Ritu", "Juhi","Jim","Ani","Manvi"];
	
	for(var i in names){

		var firstLetter = ((names[i]).charAt(0)).toLowerCase();
		if(firstLetter== 'j'){
			window.goodSpeaker.speak(names[i]);
		}
		else{
			window.helloSpeaker.speak(names[i]);
		}
	}
})(window);