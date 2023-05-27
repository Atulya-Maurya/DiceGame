const heading = document.getElementsByTagName("h1");
heading[0].innerHTML="🚩Play 1 Wins!";
const img1= document.querySelector(".img1");
const img2= document.querySelector(".img2");
const imgArr = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
let num1 = Math.floor((Math.random() * 5) + 1);
let num2 = Math.floor((Math.random() * 5) + 1);
if(num1===num2){
    heading[0].innerHTML="🎶Draw!🎶";
}
else if(num1>num2){
    heading[0].innerHTML="🚩Play 1 Wins!🚩";
}
else{
    heading[0].innerHTML="🏳️Play 2 Wins!🏳️";
}
img1.setAttribute('src', imgArr[num1]);
img2.setAttribute('src', imgArr[num2]);