/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector(".card").classList.add(generateRandomIcons());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
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
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * 13);
  return numbers[indexNumbers];
};

let generateRandomIcons = () => {
  let icons = ["diamonds", "hearts", "spades", "clubs"];
  let indexIcons = Math.floor(Math.random() * 4);
  return icons[indexIcons];
};

const refreshButton = document.querySelector("#btn");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
