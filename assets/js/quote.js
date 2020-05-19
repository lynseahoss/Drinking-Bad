$("#menu-quote").on("click", function () {
  console.log("Bad Quote");
  repeatbbBadQuote()
});

var quoteID = ""
function bbBadQuotes() {
  $(".content").css("display", "none");
  $("#pop-up").css("display", "none");
  $("#image").css("display", "none");
  $("#dare-btn").css("display", "none");



    $.ajax({
        url: "https://www.breakingbadapi.com/api/quote/random" + quoteID + "",
        method: "GET",
    }).then(function (response) {
        console.log(response)
        $("<div>")
        .addClass("ui centered card")
        .attr("id", "ui-card2")
        .appendTo("#container");
      $("<div>").addClass("image").appendTo("#ui-card2");
      $("<img>")
        .addClass("ui image")
        .attr("src", "https://i.pinimg.com/originals/19/83/c0/1983c001dcc14ed4636130e0fea8420f.jpg")
        .appendTo("#ui-card2");
      $("<div>").addClass("content").appendTo("ui-card2");
      $("<h3>").addClass("ui header").attr("id", "random-quote").text(response[0].quote).appendTo("#ui-card2");
      $("<div>")
      .addClass("ui centered")
      .attr("id", "quote-author")
      .text("- " + response[0].author)
      .appendTo("#ui-card2");

});

}
function repeatbbBadQuote() {
    $("#container").empty();
    bbBadQuotes();
  }
