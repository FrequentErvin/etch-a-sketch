let buttons = Array.from(document.querySelectorAll("button"));
let numOfPressed = 0;
let body = document.querySelector("body");
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
function changeColor(){

}
buttons.forEach(button => button.addEventListener("click",function(){
        if(!button.classList.contains("clear")){
            //console.log(button.id);
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
let slider = document.getElementById("slider");
let currentValue = slider.value;
let output = document.getElementById("grid-dimension-prompt");
let grid = document.getElementById("grid");
slider.oninput = function() {
    grid.innerHTML = '';
    output.innerHTML = `${this.value} x ${this.value}`;
    currentValue = this.value;
    let squareDimension = 512.0 / currentValue;
    //console.log("heyy" + currentValue);
    for(let i = 0; i < currentValue*currentValue; i++){
        console.log(2293829);
        grid.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${currentValue}, 1fr)`
        const cell = document.createElement("div");
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        cell.textContent = "aksdokqokwd";
        grid.appendChild(cell);
    }
}

