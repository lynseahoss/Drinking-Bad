//this fixed it

$("#no-btn").on("click", function () {
  $("#question").text("Ha, You're not Bad Enough")
  $("#image").attr("src", "assets/image/bbNo.jpg")
  $("#card-bodytext").text("")
  $("#yes-btn").css("display", "none")
  $("#no-btn").css("display", "none")
  $("<button>").addClass("ui inverted red button centered").attr("id", "home").text("Home").appendTo("#button-group")

  $("#home").on("click", function() {
      location.reload()
  })

}
)

$("#yes-btn").on("click", function () {
  $("#question").text("Pick Your Poison")
  $("#image").attr("src", "assets/image/mask.jpg")
  $("#card-bodytext").text("TO SEE HOW BAD YOU ARE...")
  $("#yes-btn").text("Click If You Dare")
  $("#no-btn").css("display", "none")

}
)

 // Creates AJAX call for random Breaking Bad
 $.ajax({
    url: "https://www.breakingbadapi.com/api/character/random",
    method: "GET"
  }).then(function(response) {
      console.log(response)
 
      //Breaking Bad Character Name
      console.log(response[0].name)
     // breaking Bad Character Nickname
      console.log(response[0].nickname)
      // Breaking Bad character image
      console.log(response[0].img)
      //Breaking Bad actor name
      console.log(response[0].portrayed)
      //Breaking Bad Alive or dead
      console.log(response[0].status)
 
  });
 
  // Creates AJAX call for random Drink API
  $.ajax({
     url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
     method: "GET"
   }).then(function(response) {
       console.log(response)
  
      //Drink Name
       console.log(response.drinks[0].strDrink)
      // Drink Instructions
       console.log(response.drinks[0].strInstructions)
       // Drink image
       console.log(response.drinks[0].strDrinkThumb)
       //Drink first ingredient
       console.log(response.drinks[0].strIngredient1)
       //Drink glass type
         console.log(response.drinks[0].strGlass)
  
   });
 