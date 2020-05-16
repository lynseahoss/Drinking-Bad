//this fixed it
var randomDrinks = [];

$("#no-btn").on("click", function () {
  $("#question").text("Ha, You're not Bad Enough");
  $("#image").attr("src", "assets/image/bbNo.jpg");
  $("#card-bodytext").text("");
  $("#yes-btn").css("display", "none");
  $("#no-btn").css("display", "none");
  $("<button>")
    .addClass("ui inverted red button centered")
    .attr("id", "home")
    .text("Home")
    .appendTo("#button-group");

  $("#home").on("click", function () {
    location.reload();
  });
});

$("#yes-btn").on("click", function () {
  $("#question").text("Pick Your Poison");
  $("#image").attr("src", "assets/image/mask.jpg");
  $("#card-bodytext").text("TO SEE HOW BAD YOU ARE...");
  $("#yes-btn").css("display", "none");
  $("#no-btn").css("display", "none");
  $("<button>")
    .addClass("ui inverted pink button centered")
    .attr("id", "dare-btn")
    .text("Click if You Dare")
    .appendTo("#button-group");

  $("#dare-btn").on("click", function () {
    $(".content").css("display", "none");
    $("#pop-up").css("display", "none");
    $("#image").css("display", "none");
    $("#dare-btn").css("display", "none");
    $(".content").text("Click a drink to reveal your Drinking Bad Partner");

    $("<div>")
      .addClass("ui container centered")
      .attr("id", "drink-div")
      .appendTo("#container");
    $("<div>")
      .addClass("ui small images")
      .attr("id", "drink-div2")
      .appendTo("#drink-div");

    for (var i = 0; i < 6; i++) {
      $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        method: "GET",
      }).then(function (response) {
        randomDrinks.push(response.drinks[0].idDrink);
        $("<img>").attr("data-name", response.drinks[0].idDrink).attr("src", response.drinks[0].strDrinkThumb).addClass("drink-btn").appendTo("#drink-div2");
      });
    }
  });
});

$(document).on("click", ".drink-btn", function characterSelect() {
  console.log($(this).attr("data-name"));
});
// $.ajax({
//   url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
//   method: "GET",
// }).then(function (response) {
//   for (var i = 0; i < 6; i++) {
//     $("<img>")
//       .attr("src", response.drinks[i].strDrinkThumb)
//       .appendTo("#drink-div2");
//   }
// });

// $("<img>").attr("src", "assets/image/bbNo.jpg").appendTo("#drink-div2")
// $("<img>").attr("src", "assets/image/bbNo.jpg").appendTo("#drink-div2")
// $("<img>").attr("src", "assets/image/bbNo.jpg").appendTo("#drink-div2")
// $("<div>").addClass("ui container centered").attr("id", "drink-div1").appendTo("#container")
// $("<div>").addClass("ui small images").attr("id", "drink-div3").appendTo("#drink-div1")
// $("<img>").attr("src", "assets/image/bbNo.jpg").appendTo("#drink-div3")
// $("<img>").attr("src", "assets/image/bbNo.jpg").appendTo("#drink-div3")
// $("<img>").attr("src", "assets/image/bbNo.jpg").appendTo("#drink-div3")
// });

//  // Creates AJAX call for random Breaking Bad
//  $.ajax({
//     url: "https://www.breakingbadapi.com/api/character/random",
//     method: "GET"
//   }).then(function(response) {
//       console.log(response)

//       //Breaking Bad Character Name
//       console.log(response[0].name)
//      // breaking Bad Character Nickname
//       console.log(response[0].nickname)
//       // Breaking Bad character image
//       console.log(response[0].img)
//       //Breaking Bad actor name
//       console.log(response[0].portrayed)
//       //Breaking Bad Alive or dead
//       console.log(response[0].status)

//   });

//   // Creates AJAX call for random Drink API
// $.ajax({
//    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
//    method: "GET"
//  }).then(function(response) {

//  }
//        console.log(response)

//       //Drink Name
//        console.log(response.drinks[0].strDrink)
//       // Drink Instructions
//        console.log(response.drinks[0].strInstructions)
//        // Drink image
//        console.log(response.drinks[0].strDrinkThumb)
//        //Drink first ingredient
//        console.log(response.drinks[0].strIngredient1)
//        //Drink glass type
//          console.log(response.drinks[0].strGlass)

//    });
