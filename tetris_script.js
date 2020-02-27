let canvas = document.querySelector("#tetris-screen");
let context = canvas.getContext("2d");

context.beginPath();
context.strokeStyle = "white";
context.rect(20,20,8,4);
context.stroke();