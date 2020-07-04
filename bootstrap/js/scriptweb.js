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

//************** AJAX (Asynchronous Javascript And XML) *******************//
// It is a client-server communication technique,
//  let's talk about the language(IT is HTTP) in which the client, that is the browser, communicates with the server. And the language that they use, otherwise known as protocol, is HTTP.

// HTTP : It is based on request.response stateless protocol, stateless in the context means that when the server responds to a request from a browser, that response does not depend on any 
// previous requests that the browser made.
// In fact, as far as the actual language in which the client, the browser and the server communicate, the server has no idea whether or not the client or the browser has requested anything from it before.

//      Identify A Resource On The Web       
// 1- URN : Uniform Resource Name - is a way to uniquely identify a resource or a name of resource.
//        : they do not tell us how to get that resource.
// 2- URI : Uniform Resource Identifier - it uniquely identified resource or location of resource. It does not necessarily tell us how to get the resource. This is becuase in URI the context is missing.
// 3- URL : Uniform Resource Locator - it is a form of URI that provides info on how to get resource

// AJAX: In traditional web application when client press a button(HTTP request sent to the server) and then the 99% identical new page is returned only that particular string is changed. while in AJAX technology , it also makes an HTTP request and the response is given by the server in the cange at current page , no new page is developed.
// SYNCHRONOUS EXECUTION- execution of one instruction at a time, we cannot start execution of another instruction untill the execution of first statement is completed.
// ASYNCHRONOUS EXECUTION- execution of more than one programming instruction at a time

// The Browser consist of differen thing inside it-
// 1- JavaScript Engine - it is synchronous.
// 2- Event Queue
// 3- webGL
// 4- HTML rendering
// 5- HTTP Requestor- it is Asynchronous.
// all 4 are connected to the JavaScript Engine