$("img").mouseover(function(){
  $(this).css({ width: "110%" });  
})
$("img").mouseout(function(){
  $(this).css({ width: "100%" });  
})
$("img").click(function(){
  $("body").addClass('overlay')
})