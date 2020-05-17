//this fixed it
var randomDrinks = [];
var btnOne = $("#btn-one")
var btnTwo = $("#btn-two")

$("#btn-two").on("click", function () {
  $("#question").text("Ha, You're not Bad Enough");
  $("#image").attr("src", "assets/image/bbNo.jpg");
  $("#card-bodytext").text("");
  $("#btn-one").css("display", "none");
  $("#btn-two").css("display", "none");
  $("<button>")
    .addClass("ui inverted red button centered")
    .attr("id", "home")
    .text("Home")
    .appendTo("#button-group");

  $("#home").on("click", function () {
    location.reload();
  });
});

$("#btn-one").on("click", function () {
  $("#question").text("Pick Your Poison");
  $("#image").attr("src", "assets/image/mask.jpg");
  $("#card-bodytext").text("TO SEE HOW BAD YOU ARE...");
  $("#btn-one").addClass("ui inverted pink button centered")
  .attr("id", "dare-btn")
  .text("Click if You Dare")
  .appendTo("#button-group");
  $("#btn-two").css("display", "none")
  $("<button>")
    .addClass("ui inverted violet button centered")
    .attr("id", "lucky")
    .text("Feelin' lucky?")
    .appendTo("#button-group")
  
  $("#lucky").on("click", function () {
    $(".content").css("display", "none");
    $("#pop-up").css("display", "none");
    $("#image").css("display", "none");
    $("#dare-btn").css("display", "none");

    $("<div>").addClass("ui centered card").attr("id", "ui-card").appendTo("#container");
      $("<div>").addClass("image").attr("id", "shape-image").appendTo("#ui-card");
      $("<img>").addClass("ui image").attr("src", "https://st4.depositphotos.com/5249193/22833/v/1600/depositphotos_228336628-stock-illustration-beautiful-girl-drinking-champagne-illustration.jpg").appendTo("#ui-card");
      $("<div>").addClass("content").appendTo("ui-card");
      $("<div>").addClass("header").text("Drink Name Here").appendTo("#ui-card");
      $("<div>").addClass("description").text("Drink Ingredients Here").appendTo("#ui-card");
      $("<div>").addClass("description").text("Mixing Instructions Here").appendTo("#ui-card");
      
      //btnTwo.css("display", "block").appendTo("#button-group2").text("Home").attr("id", "home").text("Home")
      
      // $("#home").on("click", function () {
      //   location.reload();
      // });
    })

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
  $("#drink-div").css("display", "none")
  $("<h1>").attr("id", "characterHeader").addClass("ui header centered").text("Character Name").appendTo("#container")
  $("<div>").addClass("ui segment").attr("id", "character-card").appendTo("#container")
  $("<img>").addClass("ui small left floated image").attr("src", "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%253AANd9GcQVt3zxl9IrraWLsPVL5cWObwrokplViJmDBHgW-KJbJ8-RyCWH%26usqp%3DCAU").appendTo("#character-card");
  $("<p>").text("pi Character Info here: Walter White was an only child. Walt's father died of Huntington's disease when he was six years old. He studied chemistry at the California Institute of Technology, where he conducted research on proton radiography that helped a team win a Nobel Prize in Chemistry in 1985").appendTo("#character-card")
  $("<p>").text("ADrink API: White Russian:Ingredients 1-1/2 ounces vodka, 1-1/2 ounces Kahlua, 3 ounces heavy whipping cream or milk. Directions: Place ice in a rocks glass. Add vodka and Kahlua; top with cream.").appendTo("#character-card")
  $("<p>").text("Reason why you would be character based off drink selection. ie Walter White lives a simple life but has a desire to take on the responsibility of providing for his family's future. The White Russian is a simple yet complicated drink which matches well with Walter White. ").appendTo("#character-card")
  $("<img>").addClass("ui small left floated image").attr("src", "https://f1.pngfuel.com/png/905/307/702/retro-pop-art-vintage-white-russian-black-russian-irish-cream-cocktail-garnish-rum-and-coke-png-clip-art.png").appendTo("#character-card");
  $("<br>").appendTo("#character-card")
  $("<div>").attr("id", "button-group2").addClass("ui two bottom attached buttons").appendTo("#container")
  btnOne.css("display", "block").appendTo("#button-group2").text("Try Again")
  btnTwo.css("display", "block").appendTo("#button-group2").text("Home").attr("id", "home").text("Home")
  
  $("#home").on("click", function () {
    location.reload();
  });


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
