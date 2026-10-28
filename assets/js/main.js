// main.js

let grid = document.querySelectorAll(".grid-container");
let divs = document.querySelectorAll(".grid-container div");

function randomize() {
    console.log(divs.length, "randomize!");

    // affects the whole grid
    grid[0].style.transform = `rotate(${Math.random() * 360}deg)`;

    // just the grid divs
    divs.forEach(function (div) {
        let scale = randomNumber(.4, 3);
        let translateX = randomNumber(0, 10);
        let translateY = randomNumber(0, 10);
        let rotate = randomNumber(0, 360);

        // 50% of the time...
        if (Math.random() > 0.5) {
            scale = 1; // don't affect scale
            translateX = randomNumber(0, 10);
            translateY = randomNumber(0, 10);
        }

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
}

document.addEventListener("click", randomize);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
