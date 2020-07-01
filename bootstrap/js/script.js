/************* BASIC VARIABLE DECLARATION *********/
var x ="hello World!";
var message ="in global";
console.log("global:message = " + message)
/**************************************************/

/*********** FUNCTION IN JS *******************/
var a = function () {
	var message =" inside a";
	console.log("a: message = "+message)
	b();
}// here function b priint the (outer scope)global message var because it is globally declared no matter from where it called

function b() {
	console.log("b: message =" + message);
}
a();//it print its local variable


// now b is defined inside a()

var a = function () {
	var message =" inside a";
	console.log("a: message = "+message)
	
	function b() {
	console.log("b: message =" + message);
}
b();// here the b print the local variable because here outer scope of b is a.
}
a();
/************************************************/

/********* UNDEFINED AND DEFINED VARIABLES ***********/
var x; //here it shows undefined(meaning that memory space id=s allocated and variable is declared but thr=e value is not given) becuase we didnt assign any value to x 
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
var string = "Hello";
string += " World";
console.log(string+"!");
/****************************************************/

/**************** REGULAR MATH OPERATION : +,-,*,/***/
 console.log((5 + 4) / 3);
 console.log(undefined / 5);
 function test1(a){
 	 console.log( a/5);  // it is a float division
 }
 test1(); // it shows NaN(not a number) bcoz we can not pass any argument here if we pass it gives the output
/****************************************************/

/**********************EQUALITY **************/
var x=4, y=4;
if ( x == y )
{
	console.log("x==4 is equal to y=4");
} // if the value of y is float it still show true result
x="4";
if(x==y)
{
	console.log("x='4' is equal to y=4 ")
}// it shows true becoz of type conversion
/*********************************************/

/************** STRICT EQUALITY***************/
var x='4', y=4;
if(x === y){
	console.log("strict: x='4' is equal to y=4")
}
else{
	console.log("strict: x='4' is NOT equal to y=4")
} // in strict eqality type conversion is not done automatically

/*********************************************/

/*********** If STATEMENT (all false) ***********/
if ( false || null || undefined || "" || 0 || NaN)
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
} 
/************************************************/

/************ BEST PRACTICE FOR {} STYLE ********/
// Curly brace on the same or next line ....
// Is it just a style?

function a()
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
console.log(b());
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
	 if( sideDish === undefined){
		 sideDish ="whatever";
	}  //OR
	sideDish =sideDish || "whatever!" 
	console.log("Chicken with " + sideDish)
}
orderChicken("noddles");
orderChicken();

/************************************************/

/************ OBJECT CREATION*******************/
var company = new Object(); 
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";//if we not define the comapny.ceo before it gives the error
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is:" + company.ceo.firstName);

console.log(company["name"]);// . notation is not the only way to access propertied we can also use square bracket
// dot notation is only work with valid javascript idetifier, either function name or valid javascript variable name.
//company.$stock = 110; // dot work here
company["stock of company"]=110;
console.log("Stock price is:" + company["stock of company"]);

// Better way : obgect literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	"stock of company" : 100
};
console.log(facebook.ceo.firstName);
/***********************************************/


/********* FUNCTIONS ARE First-Class Data********/
// Functions ARE Objects

function multiply(x,y) { 
	return x*y;
}
var f=multiply(2,3);
console.log(f);
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function Factory
function makeMultiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as argument
function doOprationOn(x, operation) {
	return operation(x);
}
var result = doOprationOn(5, multiplyBy3);
console.log(result)
result = doOprationOn(100, doubleAll);
console.log(result)
/***********************************************/

/**** Varible Passing by Value or By Reference ***/
// PASS BY VALUE-: given b=a, [assing /opying by value means changing
//                 copied value in b does not affect the value stored in a and vice-versa.
//                  PRIMITIVE TYPES are are pass by value 
// PASS BY REFERENCE -: given a=b, passing /copying by refrence means changing copird value in b does affect the value stored in a and vice-versa.
// 						OBJECTS are passed by refrence

var a = 7;
var b = a;  // copy by value
console.log("a: "+a);
console.log("b: "+b);

b=5;
console.log("after b updated");
console.log("a: "+a);
console.log("b: "+b); // both a and b points to defferent memory location and the value of b is updated.


var c={ x: 7};
var d=c;
console.log(c);
console.log(d); // copy by reference

d.x=5;
console.log("afetr d.x updated: "); // here c and d both have the same memory location where the object(x) is stored and both point to that memory location
console.log(d);
console.log(c);

// pass by reference vs by value in functions
// PASS BY VALUE
function chnagePrimitive(primValue) {
	console.log("in chnagePrimitive..");
	console.log("before:");
	console.log(primValue);

	primValue = 5;
	console.log("after:");
	console.log(primValue);
}

var value = 7;
chnagePrimitive(value);
console.log("after chnagePrimitive, orig value:")
console.log(value);


// PASS BY REFERENCE

function changeObject(objValue) {
	console.log("in changeObject..");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value ={x:7};
changeObject(value);
console.log("after changeObject, orig value");
console.log(value);