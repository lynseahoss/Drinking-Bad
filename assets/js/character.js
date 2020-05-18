// Global variables for the Character Page
var charID = "";
var drinkID = "";
var charInfo = {
    1: "Walter White was an only child. Walt's father died of Huntington's disease when he was six years old. He studied chemistry at the California Institute of Technology, where he conducted research on proton radiography that helped a team win a Nobel Prize in Chemistry in 1985",
    2: "",
    3: "",
    5: "",
    6: "",
    8: "",
}
var reasonInfo = {
    1: "Reason why you would be character based off drink selection. ie Walter White lives a simple life but has a desire to take on the responsibility of providing for his family's future. The White Russian is a simple yet complicated drink which matches well with Walter White.",
    2: "Jesse Pinkman is an Ace because he doesn't seem to be such an important player but ends up being the ace in the hole for Walter.",
    3: "Skyler White is a White Lady because she is sweet yet sour, similar to the triple sec, lemon juice and gin.",
    5: "Henry Schrader is a Rusty Nail because hes one of those characters that seem to pop up at unexpected times. Be careful you don't want to get caught up.",
    6: "Marie Schrader is an Aviation because she wears purple throughout the series. She believes it represents royalty, luxury and safety from the meth trade (purple is opposite of yellow).",
    8: "If you're in a jam and want a royal flush Saul is your good man.",
}

$(document).on("click", ".drink-btn", function characterSelect() {
    // Troubleshoot for correct character and drink IDs
    console.log($(this).attr("data-char"))
    console.log($(this).attr("data-drink"))
    // Empty variables from any previous use
    charID = "";
    drinkID = "";
    // Pull the data attribute values assigned to the button
    charID = $(this).attr("data-char");
    drinkID = $(this).attr("data-drink");

    getCharDrinkInfo();

    // Button listener for the 
    function getCharDrinkInfo() {
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
            // Character Name
            var charName = response[0].name;
            $("<h1>").attr("id", "characterHeader").addClass("ui header centered").text("Drinking Partner").appendTo("#container");
            // $("<h1>").attr("id", "characterHeader").addClass("ui header centered").text("You are " + charName).appendTo("#container");
            $("<div>").addClass("ui segment").attr("id", "character-card").appendTo("#container")
            $("<h2>").addClass("ui centered header").text(charName).appendTo("#character-card");
            
            // Character Image
            var charImg = response[0].img;
            $("<img>").addClass("ui small centered image").attr("src", charImg, "id", "img-here").appendTo("#character-card");
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
            $("#drink-partner").css("display", "none");
            $("<h3>").addClass("ui header").text(response.drinks[0].strDrink).appendTo("#character-card");

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
            
            
            // Need to set this to an unordered list for drink ingredients
            $("<h4>").addClass("ui header").text("Recipe:").appendTo("#character-card");
            $("<ul>").addClass("ui list").attr("id", "ingList2").appendTo("#character-card");

            // Loop to create list item for each existing ingredient
            for (i = 0; i < drinkIngredient.length; i++) {
                $("<li>").text(drinkIngredient[i]).appendTo("#ingList2")
            }

            // Drink Instructions
            $("<div>").addClass("description").text(response.drinks[0].strInstructions).appendTo("#character-card");

            // Reason character and drink match
            $("<h4>").addClass("ui header").text("Relations:").appendTo("#character-card");
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