// DOM manipulation - document object represents the entire HTML document,
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// Event Handling
document.addEventListener("DOMContentLoaded",
	function(event) {
		
		function sayHello(event) {
			console.log(event);
		 this.textContent = "said it!" // change the value of button
		 var name = document.getElementById("name").value;
		 var message = "<h2>Hello " + name + "!</h2>";

	// document
	// 	.getElementById("content")
	// 	.textContent = message;
		document
		 .getElementById("content")
		 .innerHTML = message;

		if(name ==='student'){
		var title = 
		 document
			.querySelector("#title")
			.textContent;
		title += " & lovin it!";
		 document
			.querySelector("#title")
			.textContent=title;
		}
	}
// Event Hnadlers = Event handlers are basically functions that you bind using specific methods to certain events that happen in the browser.

// Unobstructive event binding
	document.querySelector("button")
	.addEventListener("click",sayHello); 

	document.querySelector("body")
		.addEventListener("mousemove",
		  function(event){
		  	if(event.shiftKey === true){
		  	console.log("x: "+ event.clientX);
			console.log("y: "+event.clientY);	
		  	}	
		}
		);  //event listener
	
}
);



// document.querySelector("button")
// 	.onclick = sayHello;  // when we click on function the value of sayHelo function is assigned to onclick event and it shows in console