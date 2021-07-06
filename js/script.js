// fixed Menu
$(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $(".menu").addClass("fix-menu")
    }else{
      $(".menu").removeClass("fix-menu")
    }
  })
// fixed Menu
// button
$(".btt").click(function(){
    $("html,body").animate({
      scrollTop:0
    },100)
  })
  $(window).scroll(function(){
    if($(window).scrollTop() > 700){
      $(".btt").fadeIn()
    }else{
      $(".btt").fadeOut()
    }
  })
// button