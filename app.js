$(document).ready(function(){

  $("#college").hover(function () {
    $("#college").replaceWith( " <img src='http://images.newschoolers.com/images/17/00/73/37/95/733795.gif'> " )
   });


  $("#hob1").click(function () {
    $("#hob1").replaceWith( " <img src='http://www.ypc.org/news/images/20142015/golden-gate-festival_chorale.jpg'> " )
   });

   $("#hob2").click(function () {
     $("#hob2").replaceWith( " <img src='http://hsmsekeyclub.weebly.com/uploads/2/9/3/6/2936495/2463753.png'> " )
    });

    $("#hob3").click(function () {
      $("#hob3").replaceWith( " <img src='http://www.lyndhurstnj.org/web_content/Image/yogazumba.jpg'> " )
     });
});

//
// function highlightRed () {
//     $("h5").css( "background-color", "red" );
//   }
//   function unhighlight(){
//     $("h5").removeAttr("style"); //or .removeProp("background-color")
//   }
//   $("h5").hover(highlightRed, unhighlight);
