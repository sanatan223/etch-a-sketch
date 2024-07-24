'use strict'

const htmlPlayground = document.querySelector(".js-playground")

function generateDivs(){
    for (let i = 0; i < 16; i++){
        htmlPlayground.innerHTML += `<div class="js-line-of-pixel pixelLine"></div>`
    }
    console.log('lines created')
    const htmlPixelLines = document.querySelectorAll(".js-line-of-pixel")
    htmlPixelLines.forEach((eachLine) => {
        for (let i = 0; i <16; i++){
            eachLine.innerHTML += `<div class="pixel"></div>`
        }
    })
}



generateDivs();