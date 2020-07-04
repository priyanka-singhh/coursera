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

document.addEventListener("DOMContentLoaded",
	function(event) {

	  // Unobstrusive event binding
	  document.querySelector("button")
	    .addEventListener("click", function () {
	    
	    	//  Call server to get the name
	    	$ajaxUtils
	    	 .sendGetRequest("name.json",
	    	 	function (res) {
	    	 		var message = 
	    	 			res.firstName + " " + res.lastNmae
	    	 		if (res.likeIndianFood) {
	    	 			message += " likes Indian Food";
	    	 		}
	    	 		else {
	    	 			message += " doesn't like Indian Food"
	    	 		}
	    	 		message += " and uses ";
	    	 		message += res.numberOfDisplays + 1;
	    	 		message += " display for coding.";


	 				 document.querySelector("#content")
	    	         .innerHTML = "<h2>Hello " + message + "!</h2>"; 
	    	 	});
  
	    } );
	});

/***************** JSON (JavaScript Object Notation)  ***************/
 // Light weight data-interchange format 
 //  > simple textual representation of data
 // Easy for humans to read and write
 // Easy for machines to parse and generate
 // Completely independent of any language
