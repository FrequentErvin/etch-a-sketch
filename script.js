const defaultColor = "#FDDBFF";
const defaultSize = 16;
let buttons = Array.from(document.querySelectorAll("button"));
let numOfPressed = 0;
let body = document.querySelector("body");
let currentColor = defaultColor;
function resetGrid(){
    console.log("Clear");
}
function colorMode(){
    console.log("Change color");
}
function rainbowMode(){
    console.log("Rainbow mode");
}
function eraser(){
    console.log("Eraser");
}
function changeColor(e){
    e.target.style.backgroundColor = "black";
}
buttons.forEach(button => button.addEventListener("click",function(){
        if(!button.classList.contains("clear")){
            button.classList.toggle("pressed");
            if(button.classList.contains("pressed")){
                switch(button.id){
                    case "colorMode":
                        colorMode();
                        break;
                    case "rainbowMode":
                        rainbowMode();
                        break;
                    case "eraser":
                        eraser();
                        break;
                }
                for(let i = 0; i < buttons.length; i++){
                    if(buttons[i].classList.contains("pressed") && buttons[i] != button){
                        buttons[i].classList.remove("pressed");
                    }
                }
            }

        }
}))
let colorpicker = document.getElementById("")
let slider = document.getElementById("slider");
let currentValue = slider.value;
let output = document.getElementById("grid-dimension-prompt");
let grid = document.getElementById("grid");
function drawGrid(size){
    let squareDimension = 512.0 / size;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i = 0; i < size*size; i++){
        console.log(22);
        const cell = document.createElement("div");
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        grid.appendChild(cell);
    }
}
slider.oninput = function() {
    grid.innerHTML = '';
    output.innerHTML = `${this.value} x ${this.value}`;
    size = this.value;
    drawGrid(size);
}
window.onload = () => {
    drawGrid(defaultSize);
    buttons[0].classList.add("pressed");
    colorMode();
}
