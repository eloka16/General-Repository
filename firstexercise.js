/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement a function likes(arr), 
which must take in input array arr, 
containing the names of people who like an item. 
It must return the display text as shown in the examples:
()
likes([]) // must be "no one likes this"
likes(["Peter"]) // must be "Peter likes this"
likes(["Jacob", "Alex"]) // must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) // must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) // must be "Alex, Jacob and 2 others like this"
*/

function likes(incomingValue){
	var newArray = convertStringToArray(incomingValue);
	var newLent =  newArray.length;
	
	text = "";
	var val;

	if( newLent === 1 && newArray[0] === ""){	
	  	 text = "no one likes this";
	}

	else if( newLent === 1 ){	
	  	 text = newArray[0] +" likes this";
	}

	else if ( newLent === 2){	
	  	 text = newArray[0] +" and "+newArray[1]+" like this";
	}

	else if ( newLent === 3){	
	  	 text = newArray[0] +", "+newArray[1]+" and "+newArray[2]+" like this";
	}

	else if ( newLent > 3){
		 val = newLent - 2;
	  	 text = newArray[0] +", " + newArray[1] + " and "+ val +" others like this";
	}
	else{
		text = "Error";
	}

return text;
	
	
}


function arrayToString(newArray)
{
	var str = newArray.toString();
	return str;
}

//Solved
/*
Create a function binWord(str) that takes an argument str, a string.

Your function is to return an array of the ASCII characters of each letter in the string, as an array.

For Example:

'man' should return [ '01101101', '01100001', '01101110' ] */ 

function binWord(str){function convertStringToArray(val2Convert){
	var toStr = arrayToString(val2Convert); 
	var res = toStr.split(',');
	return res;
}

	var resultArray = new Array();
	var resultArray = [];

	for (var i = 0; i < str.length; i++) {
    	resultArray.push(toBin(str.charAt(i)));
	}

	return resultArray;

}

function toBin(str){
 var st,i,j,d;
 var arr = [];
 var len = str.length;
 for (i = 1; i<=len; i++){
                //reverse so its like a stack
  d = str.charCodeAt(len-i);
  for (j = 0; j < 8; j++) {
   arr.push(d%2);
   d = Math.floor(d/2);
  }
 }
        //reverse all bits again.
 return arr.reverse().join("");
}


//Solved Number two

function caffeineBuzz(nonIntArgue){
	var returnText = "";
	
	if (nonIntArgue % 3 === 0 && nonIntArgue % 4 === 0 && nonIntArgue % 2=== 0){
		returnText = "CoffeeScript";
	}
	
	else if (nonIntArgue % 3 === 0 && nonIntArgue % 2=== 0){
		returnText = "JavaScript";
	}
    else if (nonIntArgue % 3 === 0 && nonIntArgue % 4 === 0){
		returnText = "Coffee";
	}
	
	else if (nonIntArgue % 3 === 0 && nonIntArgue % 4 === 0){
		returnText = "Coffee";
	}
	
	else if	(nonIntArgue % 3 === 0){
		returnText = "Java";
	}
	
	else{
		returnText = "mocha_missing!";
	}
	
	return returnText;

}



====
function isEven(n){ 
	
	//Function to check for Even Numbers
	// Floats returns false automatically
	
	if(!Number.isInteger(n)) //the Number.isInteger function is use to check for float
	{
	   return false;
	}
	
	else if (n%2 === 0){
		return true;
	}
	
	else{
		return false;
	}
	 
}

function checkForFloat(checkValue){
	var n = checkValue.toString();
	var returnVal = n.includes(".");
	return returnVal;
	
}

function factorial(number)
{
	//function to check factorial
	// value number will be passed
	var product = 1; // this will be used to store the values multiplying
	
	if(number === 0) // check for o
	{
		return 0;
	}
	
	else if(number === 1) //check for 1
	{
		return 1;
	}
	
	else if(number > 1){
		for(var i = 1; i<= number; i++)
	{
		product *= i;
		
	}
		
	}
	else{
		return "";
	}
	
	return product;

}

function reverseString(string){
var arrayLent = string.length; // length of the incoming string
var newArray = ""; //variable that will be used to store the reverse

if (arrayLent < 1) // this is to check for null string
{
	return null;
}

else{
	
while(arrayLent--) //starting from the end of the loop
{
   newArray += string[arrayLent]; // each character is stored in newArray
}


var strNewArray = newArray; // character collected is stored in strnewArray

if (strNewArray === string){  //check for equal strong, inital and reverse string
	return true;
}

if (strNewArray !== string ){
	return newArray;
}


}

}



function PrimeChecker(number) {
    this.number = number; //this is a number passed when the class is called
    this.isPrime = isPrime; //a function in the class that can be called
}

// prime number checking
function isPrime() {
	 if(this.number < 2) return false;
    for (var i = 2; i < this.number; i++) {
        if(this.number%i===0)
            return false;
    }
    return true;
     
}


function findMinMax(arr) 
{

var min = arr[0]; //making the first index smallest
var max = arr[0]; //making the first index largest

for(var i = 0; i < arr.length; i++) {
  if(arr[i] < min) min = arr[i];
  if(arr[i] > max) max = arr[i]; 
}

var retTwoArray = []; // a new array to put the minimum and max value in
retTwoArray.push(min,max);

var retOneArray = []; // this will return the value for 
retOneArray.push(max);

if (min !== max )
{
	return retTwoArray;
}
else
{
	return retOneArray;
}


}
