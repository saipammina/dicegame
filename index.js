// creating random number for player 1

var randomNumber1=Math.random();

randomNumber1=(Math.floor((randomNumber1*6))+1);

var randomImg1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImg1);

// creating random number for player 2

var randomNumber2=Math.random();

randomNumber2=(Math.floor((randomNumber2*6))+1);

var randomImg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);
// if(randomNumber2===1)
// {
//     document.querySelector(".image2").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2===2){
//     document.querySelector(".image2").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2===3){
//     document.querySelector(".image2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2===4){
//     document.querySelector(".image2").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2===5){
//     document.querySelector(".image2").setAttribute("src","images/dice5.png");
// }
// else {
//     document.querySelector(".image2").setAttribute("src","images/dice6.png");
// }


// setting heading to corresponding result

if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 win!";
}
else{
    document.querySelector("h1").innerHTML="Player2 win! 🚩";
}