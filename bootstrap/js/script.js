/************** BASIC VARIABLE DECLARATION *********/
//var x ="hello World!";
//var message ="in global";
//console.log("global:message = " + message)
/**************************************************/

/*********** FUNCTION IN JS *******************/
/*var a = function () {
	var message =" inside a";
	console.log("a: message = "+message)
	b();
}// here function b priint the (outer scope)global message var because it is globally declared no matter from where it called

function b() {
	console.log("b: message =" + message);
}
a();//it print its local variable
*/

// now b is defined inside a()

/*var a = function () {
	var message =" inside a";
	console.log("a: message = "+message)
	
	function b() {
	console.log("b: message =" + message);
}
b();// here the b print the local variable because here outer scope of b is a.
}
a();*/
/************************************************/

/********* UNDEFINED AND DEFINED VARIABLES ***********/
/*var x; //here it shows undefined(meaning that memory space id=s allocated and variable is declared but thr=e value is not given) becuase we didnt assign any value to x 
console.log(x);
if (x==undefined){
	console.log("X is undefined")
}
else{
	console.log("X has been defined")
}
var x=5; //here it shows x's value becuase we did assign a value to x 
if (x==undefined){
	console.log("X is undefined")
}
else{
	console.log(x,"X has been defined")
}
/****************************************************/

/************ STRING CONCATENATION ******************/
/*var string = "Hello";
string += " World";
console.log(string+"!");*/
/****************************************************/

/**************** REGULAR MATH OPERATION : +,-,*,/***/
// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1(a){
// 	 console.log( a/5);  // it is a float division
// }
// test1(); // it shows NaN(not a number) bcoz we can not pass any argument here if we pass it gives the output
/****************************************************/

/**********************EQUALITY **************/
/*var x=4, y=4;
if ( x == y )
{
	console.log("x==4 is equal to y=4");
} // if the value of y is float it still show true result
x="4";
if(x==y)
{
	console.log("x='4' is equal to y=4 ")
}*/// it shows true becoz of type conversion
/*********************************************/

/************** STRICT EQUALITY***************/
/*var x='4', y=4;
if(x === y){
	console.log("strict: x='4' is equal to y=4")
}
else{
	console.log("strict: x='4' is NOT equal to y=4")
} // in strict eqality type conversion is not done automatically
*/
/*********************************************/

/*********** If STATEMENT (all false) ***********/
/*if ( false || null || undefined || "" || 0 || NaN)
{
	console.log("This line wont ever execute");
}
else
{
	console.log(" All false");
}

// IF statement (all true )
if ( true && "hello" && 1 && -1 && "false")
{
	console.log("All true");
} */
/************************************************/

/************ BEST PRACTICE FOR {} STYLE ********/
// Curly brace on the same or next line ....
// Is it just a style?

/*function a()
{
	return {
		name: "Pri"
	};
}
// if we not put the brace just after the return it shows undefined brace in next line is not valid
 // here brace is mandateory for single line 
function b(){
	return{
		name: "Pri"
	};
}
console.log(a());
console.log(b());*/
/************************************************/

/******************** FOR LOOP*******************/
var sum=0;
for(var i=0;i<10;i++){
	sum += i;
}
console.log("sum of 0 through 9 is:" + sum);
/************************************************/


/********************* DEFAULT VALUES ****************/
function orderChicken(sideDish) {
	/*if( sideDish === undefined){
		sideDish ="whatever";
	}*/   //OR
	sideDish =sideDish || "whatever!" 
	console.log("Chicken with " + sideDish)
}
orderChicken("noddles");
orderChicken();

/************************************************/
