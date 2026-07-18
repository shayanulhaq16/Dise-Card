var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

var result = document.getElementById("result");


function dise() {
    var number = Math.ceil(Math.random() * 3);
    if (card1.src === "http://127.0.0.1:5500/images/back.png" && card2.src === "http://127.0.0.1:5500/images/back.png" && card3.src === "http://127.0.0.1:5500/images/back.png") {
        if (number === 1) {
            card1.src = "images/king.png";
            card2.src = "images/king.png";
            card3.src = "images/king.png";
            result.innerHTML = "I'm Winner!"

            card1.classList.add("animate__flip");
            card2.classList.add("animate__flip");
            card3.classList.add("animate__flip");
            
        } else if (number === 2) {
            card1.src = "images/jocker.png";
            card2.src = "images/jocker.png";
            card3.src = "images/jocker.png";
            result.innerHTML = "ohh! lose"
            card1.classList.add("animate__flip");
            card2.classList.add("animate__flip");
            card3.classList.add("animate__flip");
        } else if (number === 3) {
            card1.src = "images/A.png";
            card2.src = "images/A.png";
            card3.src = "images/A.png";
            result.innerHTML = "ohh! lose"
            card1.classList.add("animate__flip");
            card2.classList.add("animate__flip");
            card3.classList.add("animate__flip");
        }
        
    }
    else{
        card1.src = "images/back.png";
        card2.src = "images/back.png";
        card3.src = "images/back.png";
        result.innerHTML = "";
        card1.classList.remove("animate__flip");
        card2.classList.remove("animate__flip");
        card3.classList.remove("animate__flip");
        
    }
}