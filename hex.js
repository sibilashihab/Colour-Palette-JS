//Javascript file that randomizes 6 colours to create a random colour palette using hex codes

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const color6 = document.querySelector(".color6");

btn.addEventListener('click', function () {
     let hexColor1 = '#';
     for (let i = 0; i < 6; i++) {
          hexColor1 += hex[getRandom()];
     }

     let hexColor2 = '#';
     for (let i = 0; i < 6; i++) {
          hexColor2 += hex[getRandom()];
     }

     let hexColor3 = '#';
     for (let i = 0; i < 6; i++) {
          hexColor3 += hex[getRandom()];
     }

     let hexColor4 = '#';
     for (let i = 0; i < 6; i++) {
          hexColor4 += hex[getRandom()];
     }

     let hexColor5 = '#';
     for (let i = 0; i < 6; i++) {
          hexColor5 += hex[getRandom()];
     }

     let hexColor6 = '#';
     for (let i = 0; i < 6; i++) {
          hexColor6 += hex[getRandom()];
     }

     color1.textContent = hexColor1;
     document.getElementsByClassName("container1")[0].style.backgroundColor = hexColor1;

     color2.textContent = hexColor2;
     document.getElementsByClassName("container2")[0].style.backgroundColor = hexColor2;

     color3.textContent = hexColor3;
     document.getElementsByClassName("container3")[0].style.backgroundColor = hexColor3;

     color4.textContent = hexColor4;
     document.getElementsByClassName("container4")[0].style.backgroundColor = hexColor4;

     color5.textContent = hexColor5;
     document.getElementsByClassName("container5")[0].style.backgroundColor = hexColor5;

     color6.textContent = hexColor6;
     document.getElementsByClassName("container6")[0].style.backgroundColor = hexColor6;
})

function getRandom() { //function to get random number
     return Math.floor(Math.random() * hex.length);
}