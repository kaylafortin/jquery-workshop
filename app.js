var announcement = $(".announcement");

announcement.each(function(){
    var xButton = $("<button class='xButton'>X</button>");
    $(this).prepend(xButton);
})

$(".xButton").click(function(){
    if ($(this).text()=== "X"){
        console.log($(this).text("X"))
        $(this).nextAll().hide()
        $(this).text("Click to show content")
    }
    else{
        $(this).nextAll().show()
        $(this).text("X")
}
})