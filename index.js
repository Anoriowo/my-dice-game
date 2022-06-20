
var theNumber = Math.floor(Math.random() * 6) + 1;
var randomDice =  "dice" + theNumber + ".png";
var theRandomDice = "images/" + randomDice;
 var allRandomDice = document.querySelectorAll("img")[0];
 allRandomDice.setAttribute("src", theRandomDice);


 var theNumber = Math.floor(Math.random() * 6) + 1;
var randomDice =  "dice" + theNumber + ".png";
var theRandomDice = "images/" + randomDice;
 var allRandomDice = document.querySelectorAll("img")[1];
 allRandomDice.setAttribute("src", theRandomDice);