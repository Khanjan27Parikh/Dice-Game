// for image1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceimage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceimage1;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// for image2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceimage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceimage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a Tie!";
}