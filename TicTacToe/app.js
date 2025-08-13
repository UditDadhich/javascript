let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

let showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

let checkWinner = () => {
    for(let patterns of winningPattern){
        let position1Val = boxes[patterns[0]].innerText;
        let position2Val = boxes[patterns[1]].innerText;
        let position3Val = boxes[patterns[2]].innerText;

        if(position1Val != "" && position2Val != "" && position3Val != ""){
            if(position1Val === position2Val && position2Val === position3Val){
                console.log("Winner" , position1Val);
                showWinner(position1Val);
            }
        }else if(position1Val != "" && position2Val != "" && position3Val != ""){
            if(position1Val != position2Val && position2Val != position3Val){
                resetGame(resetBtn);
            }
        }
    }
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" ,  resetGame);