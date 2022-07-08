let buttons = Array.from(document.querySelectorAll("button"));
let numOfPressed = 0;
buttons.forEach(button => button.addEventListener("click",function(){
        button.classList.toggle("pressed");
        for(let i = 0; i < buttons.length; i++){
            if(button.classList.contains("pressed") && buttons[i].classList.contains("pressed") && buttons[i] != button){
                buttons[i].classList.remove("pressed");
            }
        }
}))