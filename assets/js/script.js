
 // Creates AJAX call for Breaking Bad
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
 
  // Creates AJAX call for Drink API
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
 