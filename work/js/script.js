$(function(){
    $(".img_button").on("mouseover",function(){
      let target = $(this).siblings(".content");
      target.slideToggle("slow");
  
      $("html, body").animate({scrollTop:target.offset().top}, "slow");
    })
  });