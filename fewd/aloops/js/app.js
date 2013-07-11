$(document).ready(function(){

	var numPetals = 300

	for(var i=0; i < numPetals; i++){
		var petal = $('<div>')
		petal.addClass('petal')

		var red = Math.round((i/numPetals) * 255)
		var green = 255 - Math.round((i/numPetals) * 255)
		var blue = Math.round((i/numPetals) * 150) + 150

		petal.css({
			'transform': 'rotate(' + (360/numPetals) * i + 'deg)',
			'background-color': 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.5)',
			'width': 1000/numPetals + 'px',
			'height': i*3 + 'px',
			'transform-origin': i/100 + 'px ' + i*1.5 + 'px'
		})

		$('body').append(petal)
	}


})