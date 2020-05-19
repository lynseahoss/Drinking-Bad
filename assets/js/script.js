var randomDrinks = [];
var newCharID = ""
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
    // Drink image
    $("<img>")
      .addClass("ui image")
      .attr("src", "" + response.drinks[0].strDrinkThumb + "")
      .appendTo("#ui-card");
    $("<div>").addClass("content").appendTo("ui-card");

    //Drink Name
    var drinkName = response.drinks[0].strDrink;
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
  });
}

function repeatFeelLucky() {
  $("#container").empty();
  feelingLucky();
}
function repeatPickYourPoison() {
  $("#container").empty();
  pickYourPoison()
}
//Creating Pick Your Poison card
function pickYourPoison() {
  $("#question").text("Pick Your Poison");
  $("#image").attr("src", "assets/image/mask.jpg");
  $("#card-bodytext").text("TO SEE HOW BAD YOU ARE...");
  $("<div>").addClass("ui buttons").attr("id", "btn-group")
  $("#btn-one")
    .addClass("ui inverted pink button centered")
    .attr("id", "dare-btn")
    .text("Drink if You Dare")
    .appendTo("#button-group");
  $("#btn-two").addClass("ui inverted violet button centered")
    .attr("id", "lucky")
    .text("Feelin' lucky?")
    .appendTo("#button-group");

  $("#lucky").on("click", function () {
    feelingLucky();
  });

  //Drinking Partner choices and user choice
  $("#dare-btn").on("click", function () {
    $(".content").css("display", "none");
    $("#pop-up").css("display", "none");
    $("#image").css("display", "none");
    $("#dare-btn").css("display", "none");
    $("<h2>").addClass("ui centered header").attr("id", "drink-partner").text("Click a drink to reveal your Drinkin' Bad Partner").appendTo("#container");

    $("<div>")
      .addClass("ui container centered")
      .attr("id", "drink-div")
      .appendTo("#container");
    $("<div>")
      .addClass("ui small images")
      .attr("id", "drink-div2")
      .appendTo("#drink-div");

    var sixButtonArray = [
      {
        drinkId: "12528",
        charId: 1
      },

      {
        drinkId: "17194",
        charId: 3
      },
      {
        drinkId: "12101",
        charId: 5
      },
      {
        drinkId: "17180",
        charId: 6
      },
      {
        drinkId: "17225",
        charId: 2
      },
      {
        drinkId: "15082",
        charId: 8
      },
    ]

    for (var i = 0; i < sixButtonArray.length; i++) {
      var newDrinkID = sixButtonArray[i].drinkId;
      newCharID = sixButtonArray[i].charId;
      createDrinkTiles(newCharID, newDrinkID)
    }
  });
}

function createDrinkTiles(newCharID, newDrinkID) {
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + newDrinkID,
    method: "GET",
  }).then(function (response) {
    $("<img>")
      .attr("data-drink", response.drinks[0].idDrink)
      .attr("data-char", newCharID)
      .attr("src", response.drinks[0].strDrinkThumb)
      .addClass("drink-btn")
      .appendTo("#drink-div2");
  });
};

$("#btn-one").on("click", function () {

  pickYourPoison();

});
$("#menu-home").on("click", function () {
  location.reload();
});