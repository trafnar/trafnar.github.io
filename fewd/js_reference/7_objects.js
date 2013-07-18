/*
  Objects

  Objects are kinda like arrays, except being a list of stuff in order
  they represent a collection of values. Instead of having a position like
  1, 2, 3 they have 'keys' like 'name', 'age' etc.
*/

// Create objects like this. Keys and their corresponding values are separated
// by a colon. The whole thing is wrapped in { and }

{ key: 'value' }

// Or this. You separate multiple key-value pairs with a comma
{ name: 'Nathan', eyes: 2 }

// You can write it out like this to make it easier to read:
// Notice that the last item shouldn't have a comma after it.
// Also notice that the 'value' can be any kind of data, string, number, array,
// even other objects or functions.
{
  name: 'Nathan',
  age: 29,
  favoriteFruits: ['apple', 'pear', 'grapes']
}

// Objects aren't usually very useful until you store them in a variable.
var course = {
  teacher: 'Nathan',
  title: 'FEWD',
  students: 10,
  difficulty: 11,
  isFun: true,
  topics: ['Javascript', 'CSS', 'HTML']
}

// Then you can access items in the object like this:
course.students // returns 10
course.difficulty // returns 11
course.topics[1] // returns 'CSS'

// Use a dot to access the values stored in different keys. You can update
// the values just like normal variables:
course.students = 100
topics.push('Wizardry')


