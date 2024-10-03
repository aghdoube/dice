document.querySelector("img").setAttribute("src", "images/dice6.png");

document.querySelector(".img2").setAttribute("src", "images/dice6.png");
 


var randomNumber1 =  Math.floor(Math.random() *6)+1;
 var randomNumber2 =  Math.floor(Math.random() *6)+1;


document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var resultText = "";
if(randomNumber1 > randomNumber2) {
    resultText = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    resultText = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
    resultText = "Its a draw!";
}
document.querySelector("h1").innerHTML = resultText;