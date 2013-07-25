var getParallax = function(element){


  if( element.data('original_position') ){
    var position = element.data('original_position')
  }else{
    var position = element.offset().top
    element.data('original_position', position)
  }

  var altitude = element.data('altitude')
  var distanceFromTop = $(document).scrollTop()

  return position + (distanceFromTop * altitude)

}

$(function(){


  $(document).scroll(function(){


    $('.window').css({
      backgroundPosition: '0px ' + getParallax($('.window')) + 'px'
    })

    $('.bubble').each(function(){
      $(this).css({
        top: getParallax($(this)) + 'px'
      })
    })

    $('p').first().css({
      marginTop: getParallax($('p').first()) + 'px'
    })

  })


})