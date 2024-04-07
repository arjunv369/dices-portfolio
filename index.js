var randomNumber1 = Math.floor(Math.random() * 6)+ 1; // 1-6

var randomDiceImgages = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImgSorce = "./images/" + randomDiceImgages; // image/dice1.png - image/dice6.png


document.querySelectorAll("img")[0].setAttribute("src", randomImgSorce);