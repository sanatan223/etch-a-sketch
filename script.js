'use strict'

const htmlPlayground = document.querySelector(".js-playground")

function generatePixels(){

    for (let i = 0; i < 16; i++){
        htmlPlayground.innerHTML += `<div class="js-line-of-pixel pixelLine"></div>`
    }

    const htmlPixelLines = document.querySelectorAll(".js-line-of-pixel")

    htmlPixelLines.forEach((eachLine) => {

        for (let i = 0; i <16; i++){
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

generatePixels();
pen();