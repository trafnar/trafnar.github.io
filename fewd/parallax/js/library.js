var getHeightOfBackgroundImage = function(element){
  url = element.css('background-image')
  url = url.split('(')[1].split(')')[0]
  img = $('<img>').attr('src', url)
  img.css({
    position: 'absolute',
    left: '-9999px'
  })
  $('body').append(img)
  return img.height()
}

var containValue = function(value, min, max){
  if(value < min){
    return min
  }
  if(value > max){
    return max
  }
  return value
}
