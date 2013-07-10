/*
	1. BOOLEAN DATATYPE
	Just like string, and number, there is another datatype called Boolean.
	There can be an infinite number of different numbers or strings, but only
	two values for boolean, true and false.
*/

var isEarthFlat = false
var isSkyBlue = true

/*
	2. SIMPLE BOOLEAN OPERATORS
	Here are some new operators, they create boolean values by comparing things
*/

// Equality
1 == 1 // returns true
"hello" == "goodbye" // returns false

// Greater than and less than
1 > 0 // returns true
10 > 5 // returns false
4 > 4 // returns false
"a" < "b" // returns true (kinda weird)

// Greater than or equal to and less than or equal to
10 >= 10 // returns true
10 <= 5 // returns false

// Not (turns true into false and false into true)
!true // returns false
!false // returns true
!(1==1) // returns false

// Not equal
5 != 10 // returns true
10 != 10 // returns false

// Combining operators
2+2 == 1+1+1+1 // returns true


/*
	3. FANCY BOOLEAN OPERATORS
	These are commonly used but may not be as immediately familar as the others.
*/

// AND returns true if both sides of the operator are true, otherwise false.
// written as &&

true && true // returns true
false && false // returns false
true && false // returns false
(1==1) && (10==10) // returns true
!(20>30) && 10 // returns true (any non-zero number is considered true)

// OR returns true if either side of the operator are true, otherwise false
// written as: ||

true || false // returns true
false || false // returns false
true || true // returns true
(1+1 == 0) || (3 > 1) // returns true
"hello" || "goodbye" // returns true (any non-empty string is considered true)

/*
	4. More complicated 'logical expressions'
*/

true || false || 1 > 0 // if any part of multiple ORs true, it's all true
false && 1==1 && true && "hello" // if any part of multiple ANDs is false, it's all false
((2 > 3) == (1 < 2)) || ((5+5) && (false)) // simplify each part and see if you can figure out the final result


// Here we define some variables, create a logical expression using them
// and store the result in another variable. Is the result true or false?
// does the logic seem accurate?

var hoursAwake = 13
var age = 16
var hadTonsOfCoffee = false

var isTired = ((hoursAwake > 10) && (age < 25)) || hadTonsOfCoffee





