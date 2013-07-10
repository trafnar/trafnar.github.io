/*
	1. Arrays
	Arrays are a datatype, like strings, numbers, booleans. They are special because they are lists, that can contain other data types inside them.
	Create arrays using [], each item inside has a comma after it.
*/


// here is an array containing a list of some cool stuff. A couple strings, and a number
var coolStuff = ['programming', 'javascript', 42]

// you can access individual items in an array that's inside a variable by using [] after the variable name, with a number
// corresponding to which item you want. Arrays start at 0, so 0 is the first item, 1 is the second.
coolStuff[1] // this returns 'javascript'
coolStuff[0] // this returns 'programming'
coolStuff[100] // uh oh, I don't think this is going to work.. try it!

// you can replace parts of an array in a similar way
coolStuff[1] = 'html' // now 'javascript' has been replaced with 'html'

// and you can use individual items just like normal variables.
coolStuff[2] + 100 // 42+100 = 142 so this returns 142

// you can get the length of an array like this:
coolStuff.length // returns 3, the length of the coolStuff array I created earlier

// add new items to the end of an array with 'push'
coolStuff.push('the sky') // now the array is: ['programming', 'html', 42, 'the sky']

// you can push more than one thing, just separate them with commas:
coolStuff.push('hey', 'too', 'much', 'stuff!')




