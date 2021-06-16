$("document").ready(function(){
  let slide = $(".slides")
  
  slide.each(function(){
    $(this).hide()
  })

  let idx = 0
  $(slide[idx]).show()

  $("#next").click(function(){
    $(slide[idx]).fadeOut("slow")
    $(slide[idx]).hide()
    idx++
    idx%=slide.length
    $(slide[idx]).fadeIn("slow")
    $(slide[idx]).show()
  })

  $("#prev").click(function(){
    $(slide[idx]).fadeOut("slow")
    $(slide[idx]).hide()
    idx = (idx-1+slide.length)%slide.length
    $(slide[idx]).fadeIn("slow")
    $(slide[idx]).show()
  })

})