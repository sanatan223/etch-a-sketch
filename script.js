'use strict'

const htmlPlayground = document.querySelector(".js-playground")
const htmlChangeGridButton = document.querySelector(".js-change-grid-button")
let resolution = 16;

function generatePixels(grid){
    htmlPlayground.innerHTML = '';

    for (let i = 0; i < grid; i++){
        htmlPlayground.innerHTML += `<div class="js-line-of-pixel pixelLine"></div>`
    }

    const htmlPixelLines = document.querySelectorAll(".js-line-of-pixel")

    htmlPixelLines.forEach((eachLine) => {

        for (let i = 0; i <grid; i++){
            eachLine.innerHTML += `<div class="js-pixels pixel"></div>`
        }

    })
}

function pen(){

    const htmlPixels = document.querySelectorAll(".js-pixels")

    htmlPixels.forEach((eachPixel) => {

        eachPixel.addEventListener('mousemove',() => {
            eachPixel.classList.add('active-pixel')
        })

    })
}


function activateChangeResolutionButton(){
    htmlChangeGridButton.addEventListener('click',() => {
        let newResolution = parseInt(prompt("what should be the perfect resolution for you?",16))
        if (newResolution <= 100){
            resolution = newResolution;
            console.log(typeof(newResolution))
            renderWebPage();
        }else {
            alert("SORRY! resolution limit excesed.")
        }
    })
    
}

function renderWebPage(){
    
    generatePixels(resolution);
    pen();
}

renderWebPage();
activateChangeResolutionButton();