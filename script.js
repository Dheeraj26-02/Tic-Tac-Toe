const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
const newBtn=document.querySelector("#newBtn");
const main=document.querySelector(".container");
const winMain=document.querySelector(".win");
const h1=document.querySelector("#h1");
var audio = new Audio('audio.wav');




let turnO = true;

let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; 
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


function checkWinner() {
    for (let pattern of win) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBoxes();
                showWinner(pos1Val);
                break;
            }
        }
    }
};

const resetGame = () => {
    
    turnO = true;
    enableBoxes();
    main.style.display="flex"
    winMain.style.display="none";
    resetBtn.style.display="flex";
}


resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);


const showWinner=(pos1Val)=>{
    main.style.display="none";
    winMain.style.display="flex";
    audio.play();
    resetBtn.style.display="none";
    h1.innerText=`Congratulations, Winner is ${pos1Val}`;
}



