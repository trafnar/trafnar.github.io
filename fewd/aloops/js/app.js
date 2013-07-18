
var constrain = function(value, min, max){
	if(value > max){
		return max
	}else if(value < min){
		return min
	}else{
		return value
	}
}

var constrainProportionally = function(value, amin, amax, bmin, bmax){
	var adistance = amax - amin
	var bdistance = bmax - bmin
	value = value - amin
	var percentComplete = value/amax
	value = bmax * percentComplete
	return constrain(value + bmin, bmin, bmax)
}

var plantFlower = function(numPetals){

	var top = 150
	var left = 150

	var flower = $('<div>').addClass('flower')

	for(var i = 0; i < numPetals; i++){

		var red = 100
		var green = 0
		var blue = Math.round(constrainProportionally(i, 0, numPetals, 0, 255))
		var alpha = 0.5
		var width = constrainProportionally(i, 0, numPetals/2, 0, 200)
		var height = constrainProportionally(i, 0, numPetals/2, 0, 600)
		var color = 'rgba('+ red +', '+ green +', '+ blue +', '+ alpha +')'

		var petal = $('<div>').addClass('petal')
		var angle = (360/numPetals) * i
		petal.css({
			'transform': 'rotate(' + angle + 'deg)',
			// 'background-color': color,
			'border-color': color,
			'border-style': 'solid',
			'border-width': '1px',
			'left': left + 'px',
			'top': top + 'px',
			'width': width + 'px',
			'width': height + 'px'
		})
		flower.append(petal)
	}

	$('body').append(flower)

}




$(document).ready(function(){

	plantFlower(50)

})
