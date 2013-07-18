/*
  Functions

  Functions allow you to package up pieces of code into reusable chunks.
  They are very useful and increasingly important as your code gets more
  complicated.
*/


// Define a function
var myFunction = function(){
  // your code goes here
}

// Call a function
myFunction()

// Functions can do anything you want, like print a message:
var printValue = function(){
  console.log('hello world')
}

// Or create a div and put it on the page using jQuery
var createDiv = function(){
  $('body').append($('<div>'))
}


/*
Return Values

Functions can return values. Just like when you type 1+1 the value that gets
returned is 2. Your function can return a value that you can store in a variable
or do anything you want with.
*/

var complimentMe = function(){
  return "You are pretty"
}

// You can use this value however you like. Maybe you want to alert it:
alert(complimentMe())

// Or save it for later
var yay = complimentMe()

// This becomes more powerful when your functions return different things
// depending on the input.



/*
  Function Parameters

  Functions become a lot more useful when you allow for parameters.
  Parameters are like inputs to your function. They work just like
  algebraic functions.
*/

// An algebraic function might be something like: f(x) = x*x
// The javascript equivilent might be:

var squared = function(x){
  return x*x
}

// Maybe you want a function that figures out which number is biggest.
// You could write that like this:

var whichIsBiggest = function(a, b){
  if(a > b){
    return a
  }else{
    return b
  }
}

// Then you could use the function like this:

whichIsBiggest(1, 2) // returns 2
whichIsBiggest(10, 2) // returns 10