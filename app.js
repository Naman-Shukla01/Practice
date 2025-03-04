let start = false;
let level = 0;

let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");

let btns = ["red","cream","blue","green"];

document.addEventListener("keypress",function(){
    if(start===false){
        start = true;
        
        console.log("Game Started...");

        levelUp();
    }
    });

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
        userSeq = [];
        level++;
        h2.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random()*3);
        let randCol = btns[randIdx];
        let randBtn = document.querySelector(`.${randCol}`);
        gameSeq.push(randCol);
        console.log(gameSeq);
        gameFlash(randBtn);
}

function checkAns(idx){ 

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerText = "Game Over! Press any key to Start";
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);reset();
        // document.addEventListener("click", function() {
        //     reset();
        // });
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    userCol = btn.getAttribute("id");
    userSeq.push(userCol);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}