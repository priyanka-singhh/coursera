(function (global) {
	// set up a namespace for our utility
	var ajaxUtils = {};

	//  Return an HTTP request object
	function getRequestObject() {
		if(global.XMLHttpRequest) {
			return ( new XMLHttpRequest());
		}
		else if (global.ActiveXObject) {
			// For every old IE browser
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else{
			global.alert("Ajax is not supported!");
			return(null);
		}
	}


	// Makes an AJax GET request to 'requestUrl' it send request to the server
	ajaxUtils.sendGetRequest = 
	  function( requestUrl, responseHandler, isJsonResponse) {
	  	var request = getRequestObject();
	  	  request.onreadystatechange = //these all line is used to setup the parameter request
	  	    function() {
	  	    	handleResponse( request, responseHandler, isJsonResponse);
	  	    };
	  	  request.open("GET", requestUrl, true);
	  	  request.send(null); // for POST only
	  };


    // Only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(request , responseHandler, isJsonResponse){
    	if ((request.readyState == 4) && (request.status == 200)) {

    		// 	Default to isJasonResponse = true
    		if (isJsonResponse == undefined) {
    			isJsonResponse = true;
    		}

    		if ( isJsonResponse) {
    			responseHandler(JSON.parse(request.responseText));
    		}
    		else {
    			responseHandler(request.responseText);
    		}
    	}
    }

    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
})(window);