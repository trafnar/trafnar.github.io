$(document).ready(function(){

  doLocalization()

  $('.flag').click(function(){
    setCurrentLanguage($(this).data('lang'))
    doLocalization()
  })

})
