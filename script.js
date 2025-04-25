let boxes = Array.from(document.querySelectorAll('.btw'))
let reset = document.querySelector('#re-st')
let display = document.querySelector('.display')
let winner = document.querySelector('.winner')

let turn = true;  
const winpattern = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled=true;  
        checkwinner();
    });
});

const showWinner= (win) =>{
    display.innerText=`Congratulation, Winner is ${win}`
    winner.classList.remove('hide')


}

const draw =()=>{
    display.innerText = 'Draw'
    winner.classList.remove('hide')
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                boxes.forEach(box => box.disabled = true)
                return;
            }
        }
    }

    if ([...boxes].every(box => box.innerText !== "")) {
        draw();
    }
};
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""
        display.innerText= ""
        box.disabled = false
    });
    turn = true
});