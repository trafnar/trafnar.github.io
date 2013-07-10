/*
	1. What are loops?
	Loops let you do something repeatedly. It's often useful to do that in your programs. Like maybe you have a list of colors and want to display them all. You could make a loop that runs once for each color and adds a box of that color to the page.

	Or maybe you want to count to 100. You could do that with a loop.
*/

/*
	2. While Loops
	Here's a simple way to do a loop. This loop will continue to run as long as the condition is true.
*/

while(true){
	console.log('infinite loop!')
}

// oops, we've created the dreaded 'infinite loop'. Since true is always true
// this loop will go forever, make sure your condition will become false at some point.
// Maybe like this:

var counter = 0;

while(counter < 100){
	counter = counter + 1
	console.log('yeah, now we\'re talking!')
}
// cool, now we have a way to limit the loop into only going 100 times.


// here's something fun you can try.
while(prompt('who is your favorite person') != 'nathan'){
	alert('wrong answer!')
}


/*
	3. For Loops
	for loops integrate the counter concept. They provide:
	- an initialization
	- a condition
	- an update action
*/

// the three things are separated by semicolons. Here we have
// initialization; condition; update
for(var counter = 0; counter < 100; counter = counter + 1){
	console.log('i counted to ' + counter)
}

// the initialization will run once before the loop starts. The update action will run
// once for each time it loops, and the loop will continue until the condition becomes false

// for loops are basically the same as while loops, just more convenient.