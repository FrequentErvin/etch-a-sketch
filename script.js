const defaultColor = "#FDDBFF";
const defaultSize = 16;
const defaultMode = "color";
let size = defaultSize;

let currentMode = defaultMode;
let currentColor = defaultColor;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let buttons = Array.from(document.querySelectorAll("button"));
let colorpicker = document.getElementById("picker");
let slider = document.getElementById("slider");
let output = document.getElementById("grid-dimension-prompt");
let grid = document.getElementById("grid");

colorpicker.oninput = (e) => setCurrentColor(e.target.value);
slider.oninput = function() {
    grid.innerHTML = '';
    output.innerHTML = `${this.value} x ${this.value}`;
    size = this.value;
    drawGrid(size);
}

buttons.forEach(button => button.addEventListener("click",function(){
    if(!button.classList.contains("clear")){
        button.classList.toggle("pressed");
        if(button.classList.contains("pressed")){
            switch(button.id){
                case "colorMode":
                    currentMode = "color";
                    break;
                case "rainbowMode":
                    currentMode = "rainbow";
                    break;
                case "eraser":
                    currentMode = "eraser";
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


function resetGrid(){
    grid.innerHTML = "";
    console.log("Clear");

    drawGrid(size);
}

function changeColor(e){
    if(e.type == "mouseover" && mouseDown == false){
       return;
    }
    if(currentMode == "color"){
        e.target.style.backgroundColor = currentColor;
    }else if(currentMode == "rainbow"){
        let randomHexColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomHexColor;
    }else{
        e.target.style.backgroundColor = "#FFFFFF";
    }
}


function setCurrentColor(newColor) {
    currentColor = newColor
}

currentColor = colorpicker.value;




function drawGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    //console.log(69);
    for(let i = 0; i < size*size; i++){
        //console.log(22);
        const cell = document.createElement("div");
        cell.addEventListener('mousedown', changeColor);
        cell.addEventListener('mouseover', changeColor);
        cell.classList.add("no-drag");
        grid.appendChild(cell);
    }
}

window.onload = () => {
    drawGrid(defaultSize);
    buttons[0].classList.add("pressed");
}
