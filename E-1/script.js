$(function(){
    $(".menu>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    })
    $(".menu>ul>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    })
})
setInterva(function(){
    $(".slidewrap").delay(2000);
    $(".slidewrap").animate({marginLeft:-800})
    $(".slidewrap").delay(2000);
    $(".slidewrap").animate({marginLeft:-1600})
    $(".slidewrap").delay(2000);
    $(".slidewrap").animate({marginLeft:0})
})

$(".gtab").click(function(){
    $(".gallery").show();
    $(".notice").hide();
})

    

