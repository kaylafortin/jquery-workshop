var announcement = $(".announcement");


$(document).ready(function(){
    announcement.each(function(){
        var xButton = $("<button class='xButton'>X</button>");
        $(this).prepend(xButton);
    })
    xbutton()

})

function xbutton(){
    $(".xButton").click(function(){
        $(this).nextAll().hide()
        $(this).text("Click to show content")
        $(this).click(function(){
        $(this).nextAll().show()
        $(this).text("X")
        xbutton()
    })
    })
}