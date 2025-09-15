const text = document.querySelector("#text");
const changeTextBtm = document.querySelector("#changeText");

function newText(){
    text.textContent = "Goodbye World"
    
}

changeTextBtm.addEventListener(
    "click",
    newText
);
