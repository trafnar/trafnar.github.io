/*
	1. If Statement
	If statements let you execute some code only IF some condition is true.
	The condition is a logical expression that goes in the parenthesis right
	after the word if. The code to be executed goes inside a block { .. } right
	after the condition.
*/


	if(condition){
		// execute this block
	}

	if(3 > 0){
		alert("It's true, 3 is greater than 0!")
	}

	if(100 < 0){
		alert("Uh oh, something is wrong with the laws of the universe")
	}

	var drinkingAge = 21
	var myAge = 18

	if(myAge >= drinkingAge){
		alert("You may drink")
	}

	// remember, you can put any code you want inside of the block.
	var score = 100
	if(score > 50){
		$('#you_lose').hide()
		$('#you_win').show()
		$('#message').text('you won!')
	}



/*
	2. If/Else Statement
	You can make if/else statements that execute the first block of code
	if the condition is true, and execute the second block of code if the
	condition is false
*/

var drinkingAge = 21
var myAge = 30

if(myAge >= drinkingAge){
	alert("You my drink!")
}else{
	alert("Don't drink!")
}



/*
	3. If/Else if/Else
	You can chain together multiple if/else if statements as shown
*/


var country = 'uk'
var age = 18

if(country == 'usa'){
	var drinkingAge = 21
}else if(country == 'uk'){
	var drinkingAge = 18
}else if(country == 'cyprus'){
	var drinkingAge = 17
}else{
	var drinkingAge = 0
}

if(age >= drinkingAge){
	alert("It's ok for you to drink in your country")
}else{
	alert("You may not drink in your country")
}



/*
	4. Anything can go inside the code block, even other if statements
*/

if(country == 'usa'){
	if(beverage == 'beer'){
		alert('you may drink this if you are 21 or older')
	}else if(beverage == 'juice'){
		alert('drink this at any age!')
	}
}else{
	alert('your country probably has sensible drinking laws')
}