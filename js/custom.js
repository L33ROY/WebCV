/**
 * Created by LW on 15/06/15.
 */
$(document).ready(function()
{
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $('#sport').hover(function()
    {
        $(this).css("color","lightskyblue");
        $('.icon-background-sport').css("color","dodgerblue");
        $('.icon-circle-sport').css("color","lightskyblue");
    },function()
    {
        $(this).css("color","black");
        $('.icon-background-sport').css("color","lightskyblue");
        $('.icon-circle-sport').css("color","dodgerblue");
    });

    $('#travel').hover(function()
    {
        $(this).css("color","#c0ffc0");
        $('.icon-background-travel').css("color","#c0ffc0");
        $('.icon-circle-travel').css("color","#40c040");
    },function()
    {
        $(this).css("color","black");
        $('.icon-background-travel').css("color","#40c040");
        $('.icon-circle-travel').css("color","#c0ffc0");
    });

    $('#business').hover(function()
    {
        $(this).css("color","#c0c0ff");
        $('.icon-background-business').css("color","mediumpurple");
        $('.icon-circle-business').css("color","#c0c0ff");
    },function()
    {
        $(this).css("color","black");
        $('.icon-background-business').css("color","#c0c0ff");
        $('.icon-circle-business').css("color","mediumpurple");
    });

    $('nav div div ul li').click(function(e)
    {
        var parentOffset = $(this).offset(),
            cursorX      = e.pageX - parentOffset.left,
            cursorY      = e.pageY - parentOffset.top;
        $(this).children(".ripple").remove();
        $(this).append("<div class=\"ripple\"></div>");
        $(this).children(".ripple").css({
            "left" : cursorX + "px",
            "top" : cursorY + "px"
        });
    });
});