// jQuery object equality function
$.fn.equals = function(compareTo) {
  if (!compareTo || this.length != compareTo.length) {
    return false;
  }
  for (var i = 0; i < this.length; ++i) {
    if (this[i] !== compareTo[i]) {
      return false;
    }
  }
  return true;
};





$(function(){

  $('.problem').each(function(i, e){
    code = $(this).find('.code')
    $(this).find('.instructions').prepend(i+1 + '.')
    source = $('<pre class="source">').text(code.html())
    rendered = $('<div class="rendered">').html(code.html())
    code.html('').append(source).append(rendered)
    // $('.source').hide()
    if(source.height() > rendered.height())
      rendered.height(source.height())
  })


  $('.problem input.answer_input').keyup(function(){
    value = $(this).val()
    container = $(this).parents('.problem')
    code = container.find('.rendered')
    code.find('.selected').removeClass('selected')
    result = code.find(value)
    result.addClass('selected')
    answer = $(this).data('answer')
    answerResult = code.find(answer)
    if(result.equals(answerResult))
      container.addClass('correct')
    else
      container.removeClass('correct')
  })

})