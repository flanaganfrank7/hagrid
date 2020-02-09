let bodyHeight = document.height
alert(bodyHeight)

let gridSize = document.currentScript.getAttribute('size');
let gridColor = document.currentScript.getAttribute('color');
let finalSize = parseInt(gridSize)
let zed = document.currentScript.getAttribute('zed');
// finalZed = parseInt(zed)

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', zed)
}

function draw() {
    background(0, 0, 0, 0);

    for (let x = 0; x < windowWidth; x = x + finalSize) {

        stroke(gridColor);
        strokeWeight(.1);
        line(x, 0, x, bodyHeight)
    }
    for (let y = 0; y < bodyHeight; y = y + finalSize) {
        fill(255)
        stroke(gridColor);
        strokeWeight(.1);
        line(0, y, windowWidth, y)
    }
}

