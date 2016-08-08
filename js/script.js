$(document).ready(function(){
  $(window).on("resize",function(){
    var windowHeight = $(window).height();
    var headerHeight = $("#header-course").height();
    var footerHeight = $("footer").height();
    var containerHeight = windowHeight - (headerHeight + footerHeight);

    $("#container").css("height", containerHeight );
    console.log(containerHeight);
  })
});
