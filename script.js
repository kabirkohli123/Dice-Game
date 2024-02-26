var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber + ".png";

var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}


document.addEventListener('DOMContentLoaded', function () {
    // Get the refresh button element
    const refreshButton = document.getElementById('refreshButton');

    // Add a click event listener to the button
    refreshButton.addEventListener('click', function () {
        // Reload the page when the button is clicked
        location.reload();
    });
});



