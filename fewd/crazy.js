var body = $('body')
var gradient

var clearPage = function(){
	body.empty()
}

var randomBetween = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomColor = function(){
	var r = randomBetween(0, 255)
	var g = randomBetween(0, 255)
	var b = randomBetween(0, 255)
	return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

var randomGradient = function(){
	var angle = randomBetween(0, 360)
	var startPercent = randomBetween(0, 50)
	var endPercent = randomBetween(50, 100)
	return 'linear-gradient(' + angle + 'deg, ' + randomColor() + ' ' + startPercent + '%,' + randomColor() + ' '+endPercent+'%)'
}

var crazyBackground = function(){
	if(gradient){
		return randomGradient()
	}else{
		return randomColor()
	}
}

var createBox = function(cssOptions){
	cssOptions = $.extend({
		'float': 'left'
	}, cssOptions)
	box = $('<div>').addClass('box').css(cssOptions)
	return box
}

var drawBoxes = function(howMany, cssOptions){
	for(var i=0; i < howMany; i++){
		body.prepend(createBox(cssOptions))
	}
}

var makeBoxesHoverable = function(){
	$('.box').mouseover(function(event){
		var target = $(event.target)
		target.css({
			background: crazyBackground()
		})
	})
}

var makeBoxesClickable = function(){
	$('.box').click(function(event){
		target = $(event.target)
		targetBackground = target.css('background')
		$('.box').css({background: targetBackground})
	})
}

var randomizeColors = function(){
	$('.box').each(function(i, e){
		target = $(e)
		target.css({backgroundColor: crazyBackground()})
	})
}

var randomBox = function(){
	return $($('.box')[randomBetween(0, $('.box').size()-1)])
}

var flicker = function(ms){
	flickerTimer = setInterval(function(){
		randomBox().css({background: crazyBackground()})
	}, 50)

	setTimeout(function(){
		clearInterval(flickerTimer)
		randomizeColors()
	}, ms)
}

var goCrazy = function(options){
	options = $.extend({
		gradient: false
	}, options)
	gradient = options.gradient
	clearPage()
	drawBoxes(options.numBoxes, options.boxCSS)
	flicker(options.initialFlickerTime)
	makeBoxesHoverable()
	makeBoxesClickable()
}

