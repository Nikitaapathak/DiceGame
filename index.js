
//Creating random number between 1 to 6 for player 1

var randomNumber1 = Math.floor( Math.random() * 6) + 1;

var imgName = "dice" + randomNumber1 + ".png";

var imgSource = "images/"+ imgName;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imgSource);


//doing the same thing for player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var nameImg = "dice" + randomNumber2 +".png";
var source = "images/" + nameImg;

var  image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",source);

var docs = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    docs.innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    docs.innerHTML = "Player 2 wins!";
}else{
    docs.innerHTML = "Draw";
}


