import "bootstrap";
//import "./style.css";

const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const suits = ["♥", "♦", "♣", "♠"];

function generateCard() {
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("card-suit-top").innerText = randomSuit;
  document.getElementById("card-suit-bottom").innerText = randomSuit;
  document.getElementById("card-value").innerText = randomValue;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.getElementById("card-suit-top").style.color = "red";
    document.getElementById("card-suit-bottom").style.color = "red";
    document.getElementById("card-value").style.color = "red";
  } else {
    document.getElementById("card-suit-top").style.color = "black";
    document.getElementById("card-suit-bottom").style.color = "black";
    document.getElementById("card-value").style.color = "black";
  }
}
const generateCardbutton = document.querySelector(".generateCardbutton");
generateCardbutton.addEventListener("click", generateCard);
