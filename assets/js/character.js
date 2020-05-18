// Global variables for the Character Page
var charID = "";
var drinkID = "";
var charInfo = {
    1: "Walter White was an only child. Walt's father died of Huntington's disease when he was six years old. He studied chemistry at the California Institute of Technology, where he conducted research on proton radiography that helped a team win a Nobel Prize in Chemistry in 1985",
    2: "",
}
var reasonInfo = {
    1: "Reason why you would be character based off drink selection. ie Walter White lives a simple life but has a desire to take on the responsibility of providing for his family's future. The White Russian is a simple yet complicated drink which matches well with Walter White.",
    2: "",
}

$(document).on("click", ".drink-btn", function characterSelect() {

    console.log($(this).attr("data-char"))
    
            // Empty variables from any previous use
            charID = "";
            drinkID = "";
    
            // Pull the data attribute values assigned to the button
            charID = $(this).attr("data-char");
            console.log(charID)
            drinkID = $(this).attr("data-drink");
            console.log(drinkID)

getCharDrinkInfo();

    // Button listener for the 
function getCharDrinkInfo() {

        console.log("drink button 1")
        $("#drink-div").css("display", "none");



        // Pass the variables to their respective functions
        getCharInfo(charID, drinkID);

    };

    // Create dynamic character information
    function getCharInfo(charID, drinkID) {
        // Create AJAX call for Character API
        $.ajax({
            url: "https://www.breakingbadapi.com/api/characters/" + charID + "",
            method: "GET",
        }).then(function (response) {
            console.log(response)
            // Character Name
            var charName = response[0].name;
            $("<h1>").attr("id", "characterHeader").addClass("ui header centered").text("You are " + charName).appendTo("#container");
            $("<div>").addClass("ui segment").attr("id", "character-card").appendTo("#container")

            // Character Image
            var charImg = response[0].img;
            $("<img>").addClass("ui small left floated image").attr("src", charImg).appendTo("#character-card");

            // Character Info
            var newCharInfo = $("<p>").text(charInfo[charID])
            console.log(newCharInfo)
            $("#character-card").append(newCharInfo)

            getDrinkInfo(drinkID);
        });
    };

    // Create dynamic drink information
    function getDrinkInfo(drinkID) {
        // Creates AJAX call for Drink API
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID + "",
            method: "GET",
        }).then(function (response) {
            console.log("happy")
            //Drink Name
            // var drinkName = response.drinks[0].strDrink;
            console.log(drinkID);
            $("<h2>").addClass("ui header").text(response.drinks[0].strDrink).appendTo("#character-card");

            //Drink first ingredient
            var drinkIngredient = [];
            if (response.drinks[0].strIngredient1) {
                drinkIngredient.push(response.drinks[0].strIngredient1)
            };
            if (response.drinks[0].strIngredient2) {
                drinkIngredient.push(response.drinks[0].strIngredient2)
            };
            if (response.drinks[0].strIngredient3) {
                drinkIngredient.push(response.drinks[0].strIngredient3)
            };
            if (response.drinks[0].strIngredient4) {
                drinkIngredient.push(response.drinks[0].strIngredient4)
            };
            if (response.drinks[0].strIngredient5) {
                drinkIngredient.push(response.drinks[0].strIngredient5)
            };
            if (response.drinks[0].strIngredient6) {
                drinkIngredient.push(response.drinks[0].strIngredient6)
            };
            if (response.drinks[0].strIngredient7) {
                drinkIngredient.push(response.drinks[0].strIngredient7)
            };
            if (response.drinks[0].strIngredient8) {
                drinkIngredient.push(response.drinks[0].strIngredient8)
            };
            if (response.drinks[0].strIngredient9) {
                drinkIngredient.push(response.drinks[0].strIngredient9)
            };
            console.log(drinkIngredient);

            // Need to set this to an unordered list for drink ingredients
            $("<h3>").addClass("ui header").text("Recipe:").appendTo("#character-card");
            $("<ul>").addClass("ui list").attr("id", "ingList2").appendTo("#character-card");

            for (i = 0; i < drinkIngredient.length; i++) {
                $("<li>").text(drinkIngredient[i]).appendTo("#ingList2")
            }

            // Drink Instructions
            console.log(response.drinks[0].strInstructions);
            $("<div>").addClass("description").text(response.drinks[0].strInstructions).appendTo("#character-card");


            // Reason character and drink match
            $("<p>").text(reasonInfo[charID]).appendTo("#character-card");

            $("<br>").appendTo("#character-card");
            $("<div>").attr("id", "button-group2").addClass("ui two bottom attached buttons").appendTo("#container");
            btnOne.css("display", "block").appendTo("#button-group2").text("Try Again");
            btnTwo.css("display", "block").appendTo("#button-group2").text("Home").attr("id", "home").text("Home");

            $("#home").on("click", function () {
                location.reload();
            });

        });
    };

});

