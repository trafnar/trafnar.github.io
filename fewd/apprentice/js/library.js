var createBoard = function(blocks, length){
  // return an array with length elements
  // each element should be a number corresponding
  // to the number of 'blocks' in that position
  // total blocks (sum of all number) should equal the blocks parameter
  board = [2, 5, 2, 0, 3, 1]
}

var renderBoard = function(){
  // populate the #board div with a representation of the board
  // it could be just printing out all the numbers
  // earase the #board div first so that it's clean each time

  $("#board").text(board)
}

var lose = function(){
  alert('lose')
  startGame()
}

var win = function(){
  time = (Date.now() - startTime)/1000
  alert('you win! ' + time)
  startGame()
}

var knock = function(){
  // remove one from the first element of the board array
  // this represents knocking out one block
  // if the stack is already 0, then the person loses so call lose()
  if(board[0] == 0){
    lose()
  }else{
    // board[0] = board[0] - 1
    // board[0] -= 1
    board[0]--
    renderBoard()
  }

}

var next = function(){
  // board.length
  if(board.length == 1){
    win()
  }else{

    if(board[0] == 0){
      board.shift()
      renderBoard()
    }else{
      alert('Nope!')
    }

  }
  // remove the current stack of blocks if it is at 0
  // otherwise alert('nope!') because all the blocks
  // need to be knocked first
  // you can remove the first element of an array with array.shift()
  // if the board length is 1, then the person wins, so call win()
}

var listenForKeys = function(){

  // listen for the keydown event on document
  $(document).keydown(function(event){

    if(!startTime){
      startTime = Date.now()
    }

    if(event.keyCode == 74){
      knock()
    }

    if(event.keyCode == 75){
      next()
    }

  })

  // the event object passed into your event handler
  // will have a property called keyCode
  // use whatthekeycode.com to find the values for different codes

  // if the user presses "j" then call knock()
  // if the user presses "k" then call next()

  // if any key is pressed, record the current time in the variable 'startTime'
  // which has already been defined in app.js, no need to use 'var'
  // so that we can see how long it took when the game ends

}

var startGame = function(){
  startTime = null
  createBoard(10, 5)
  renderBoard()
}

var initGame = function(){
  listenForKeys()
  startGame()
}

