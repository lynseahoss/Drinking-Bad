//this fixed it
var randomDrinks = [];
var btnOne = $("#btn-one");
var btnTwo = $("#btn-two");



$("#btn-two").on("click", function () {
  $("#question").text("Ha, You're not Bad Enough");
  $("#image").attr(
    "src",
    "https://mymodernmet.com/wp/wp-content/uploads/archive/g2N0gPE1T38I8UkzEuKw_1082103608.jpeg"
  );
  $("#card-bodytext").text("");
  $("#btn-one").css("display", "none");
  $("#btn-two").css("display", "none");
  $("<button>")
    .addClass("ui inverted purple button centered")
    .attr("id", "home")
    .text("Home")
    .appendTo("#button-group");

  $("#home").on("click", function () {
    location.reload();
  });
});

// Runs a random drink Feeling Lucky page
function feelingLucky() {
  $(".content").css("display", "none");
  $("#pop-up").css("display", "none");
  $("#image").css("display", "none");
  $("#dare-btn").css("display", "none");

  $("<div>")
    .addClass("ui centered card")
    .attr("id", "ui-card")
    .appendTo("#container");
  $("<div>").addClass("image").attr("id", "shape-image").appendTo("#ui-card");

  // Creates AJAX call for random Drink API
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    method: "GET",
  }).then(function (response) {
    console.log(response);

    // Drink image
    console.log(response.drinks[0].strDrinkThumb);
    $("<img>")
      .addClass("ui image")
      .attr("src", "" + response.drinks[0].strDrinkThumb + "")
      .appendTo("#ui-card");

    $("<div>").addClass("content").appendTo("ui-card");

    //Drink Name
    var drinkName = response.drinks[0].strDrink;
    console.log(response.drinks[0].strDrink);
    $("<div>")
      .addClass("ui centered header")
      .text(drinkName)
      .appendTo("#ui-card");

    //Drink first ingredient
    var drinkIngredient = [];
    if (response.drinks[0].strIngredient1) {
      drinkIngredient.push(response.drinks[0].strIngredient1);
    }
    if (response.drinks[0].strIngredient2) {
      drinkIngredient.push(response.drinks[0].strIngredient2);
    }
    if (response.drinks[0].strIngredient3) {
      drinkIngredient.push(response.drinks[0].strIngredient3);
    }
    if (response.drinks[0].strIngredient4) {
      drinkIngredient.push(response.drinks[0].strIngredient4);
    }
    if (response.drinks[0].strIngredient5) {
      drinkIngredient.push(response.drinks[0].strIngredient5);
    }
    if (response.drinks[0].strIngredient6) {
      drinkIngredient.push(response.drinks[0].strIngredient6);
    }
    if (response.drinks[0].strIngredient7) {
      drinkIngredient.push(response.drinks[0].strIngredient7);
    }
    if (response.drinks[0].strIngredient8) {
      drinkIngredient.push(response.drinks[0].strIngredient8);
    }
    if (response.drinks[0].strIngredient9) {
      drinkIngredient.push(response.drinks[0].strIngredient9);
    }
    console.log(drinkIngredient);

    // This for loop did not work for pulling the drink ingredients from the API
    // for (i = 1; i < 16; i++) {
    //   if (response.drinks[0].strIngredient[i]) {
    //     drinkIngredient = drinkIngredient.push(response.drinks[0].strIngredient[i]);
    //   };

    // Need to set this to an unordered list for drink ingredients
    $("<h3>").addClass("ui header").text("Recipe:").appendTo("#ui-card");
    $("<ul>")
      .addClass("ui centered list")
      .attr("id", "ingList")
      .appendTo("#ui-card");

    for (i = 0; i < drinkIngredient.length; i++) {
      $("<li>").text(drinkIngredient[i]).appendTo("#ingList");
    }

    // Drink Instructions
    console.log(response.drinks[0].strInstructions);
    $("<div>")
      .addClass("description")
      .text(response.drinks[0].strInstructions)
      .appendTo("#ui-card");

    $("<div>")
      .attr("id", "button-group1")
      .addClass("ui two bottom attached buttons")
      .appendTo("#ui-card");

    // Tread lightly button
    btnOne
      .css("display", "block")
      .appendTo("#button-group1")
      .text("Tread Lightly")
      .attr("id", "tread-lightly");
    $("#tread-lightly").on("click", function () {
      // Repeats the feel lucky random drink function
      repeatFeelLucky();
    });

    // Home Button
    btnTwo
      .css("display", "block")
      .appendTo("#button-group1")
      .text("Home")
      .attr("id", "home");
    $("#home").on("click", function () {
      //
      location.reload();
    });
  });
}

function repeatFeelLucky() {
  $("#container").empty();
  feelingLucky();
}

function pickYourPoison() {
  $("#question").text("Pick Your Poison");
  $("#image").attr("src", "assets/image/mask.jpg");
  $("#card-bodytext").text("TO SEE HOW BAD YOU ARE...");
  $("#btn-one")
    .addClass("ui inverted pink button centered")
    .attr("id", "dare-btn")
    .text("Click if You Dare")
    .appendTo("#button-group");
  $("#btn-two").css("display", "none");
  $("<button>")
    .addClass("ui inverted violet button centered")
    .attr("id", "lucky")
    .text("Feelin' lucky?")
    .appendTo("#button-group");

  $("#lucky").on("click", function () {
    feelingLucky();
  });

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
        $("<img>")
          .attr("data-name", response.drinks[0].idDrink)
          .attr("src", response.drinks[0].strDrinkThumb)
          .addClass("drink-btn")
          .appendTo("#drink-div2");
      });
    }
  });
}

$("#menu-pyp").on("click", function() {
  pickYourPoison();
}) 

$("#btn-one").on("click", function () {
  pickYourPoison();
  
});

$(document).on("click", ".drink-btn", function characterSelect() {
  console.log($(this).attr("data-name"));
  $("#drink-div").css("display", "none");
  $("<h1>")
    .attr("id", "characterHeader")
    .addClass("ui header centered")
    .text("Character Name")
    .appendTo("#container");
  $("<div>")
    .addClass("ui segment")
    .attr("id", "character-card")
    .appendTo("#container");
  $("<img>")
    .addClass("ui small left floated image")
    .attr(
      "src",
      "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%253AANd9GcQVt3zxl9IrraWLsPVL5cWObwrokplViJmDBHgW-KJbJ8-RyCWH%26usqp%3DCAU"
    )
    .appendTo("#character-card");
  $("<p>")
    .text(
      "pi Character Info here: Walter White was an only child. Walt's father died of Huntington's disease when he was six years old. He studied chemistry at the California Institute of Technology, where he conducted research on proton radiography that helped a team win a Nobel Prize in Chemistry in 1985"
    )
    .appendTo("#character-card");
  $("<p>")
    .text(
      "ADrink API: White Russian:Ingredients 1-1/2 ounces vodka, 1-1/2 ounces Kahlua, 3 ounces heavy whipping cream or milk. Directions: Place ice in a rocks glass. Add vodka and Kahlua; top with cream."
    )
    .appendTo("#character-card");
  $("<p>")
    .text(
      "Reason why you would be character based off drink selection. ie Walter White lives a simple life but has a desire to take on the responsibility of providing for his family's future. The White Russian is a simple yet complicated drink which matches well with Walter White. "
    )
    .appendTo("#character-card");
  $("<br>").appendTo("#character-card");
  $("<div>")
    .attr("id", "button-group2")
    .addClass("ui two bottom attached buttons")
    .appendTo("#container");
  btnOne.css("display", "block").appendTo("#button-group2").text("Try Again");
  btnTwo
    .css("display", "block")
    .appendTo("#button-group2")
    .text("Home")
    .attr("id", "home")
    .text("Home");

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
