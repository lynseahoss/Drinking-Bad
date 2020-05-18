$("#gmbtn-one").on("click", function () {
    $("#pop-up2").css("display", "none")
    $("#content2").css("display", "none")
    $("#image2").css("display", "none")
    $("#button-group3").css("display", "none")
       $("<button>")
      .addClass("ui inverted purple button centered")
      .attr("id", "home")
      .text("Home")
      .appendTo("#button-group");
  
    $("#home").on("click", function () {
      location.reload();
    });
  });

  $("#gmbtn-two").on("click", function () {
    
    $("<button>")
   .addClass("ui inverted purple button centered")
   .attr("id", "home")
   .text("Home")
   .appendTo("#button-group");

 $("#home").on("click", function () {
   location.reload();
 });
});