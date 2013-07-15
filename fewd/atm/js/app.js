
// Store initial balance, ask the user for some inputs
var balance = 1000
var transaction = prompt("deposit or withdrawl?")
var amount = prompt("what amount?")

// convert amount into a number (in case it is a string)
amount = parseInt(amount)

if(transaction === "deposit"){
  // add the amount if this is a deposit
  balance = balance + amount
}else if(transaction === "withdrawl"){
  // otherwise subtract it
  balance = balance - amount
}

// output the new balance (to the HTML page and to the console)
$('#output').html('Your balance is ' + balance)
console.log(balance)

// print a message to the console if the balance went negative
if(balance < 0){
  console.log('Your balance is negative!')
}