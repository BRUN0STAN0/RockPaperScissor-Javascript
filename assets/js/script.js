let boxGame = document.getElementById("box-game");
let rock = document.getElementsByClassName("rock")[0];
let paper = document.getElementsByClassName("paper")[0];
let scissors = document.getElementsByClassName("scissors")[0];
let randomImage = document.getElementsByClassName("random-image")[0];
let playAgain = document.querySelector("button");
playAgain.classList.toggle("hide");
let rockImage = `<img class="rock" src="img/Rock.png">`
let paperImage = `<img class="paper" src="img/Paper.png">`;
let scissorsImage = `<img class="scissors" src="img/Scissors.png">`;
randomImage.classList.toggle("hide");  

let rockCpu = 0;
let paperCpu = 1;
let scissorsCpu = 2;

let random;

function choise(eventClick){

    random = Math.floor(Math.random()*3);

    if (eventClick.target.classList == "rock") {
        rock.classList.toggle("my-choise");
        paper.classList.toggle("hide");
        scissors.classList.toggle("hide");  
        randomImage.classList.toggle("hide");  //show 
    } else if (eventClick.target.classList == "paper"){
        rock.classList.toggle("hide");
        paper.classList.toggle("my-choise");
        scissors.classList.toggle("hide");
        randomImage.classList.toggle("hide");  
    } else if (eventClick.target.classList == "scissors") {
        rock.classList.toggle("hide");
        paper.classList.toggle("hide");
        scissors.classList.toggle("my-choise");
        randomImage.classList.toggle("hide");  
    }
    computerImage();
}

function computerImage() {
    if (random == rockCpu) {
        randomImage.innerHTML = rockImage;
        playAgain.classList.toggle("hide"); //show
    } else if (random == paperCpu) {
        randomImage.innerHTML = paperImage;
        playAgain.classList.toggle("hide");
    } else if (random == scissorsCpu) {
        randomImage.innerHTML = scissorsImage;
        playAgain.classList.toggle("hide");
    }
    matchImage();
}

function matchImage() {
    let myChoise = document.getElementsByClassName("my-choise")[0].classList.value;
    console.log(myChoise)
    if ((random == rockCpu && myChoise.includes("rock")) 
    || (random == paperCpu && myChoise.includes("paper")) 
    || (random == scissorsCpu && myChoise.includes("scissors"))) {
        playAgain.style.backgroundColor = "gray";
        playAgain.innerHTML = `<a href="./index.html">YOU TIED</a>`
    } else if 
        ((random == rockCpu && myChoise.includes("scissors"))
    || (random == paperCpu && myChoise.includes("rock")) 
    || (random == scissorsCpu && myChoise.includes("paper"))) {
        playAgain.style.backgroundColor = "red";
        playAgain.innerHTML = `<a href="./index.html">YOU LOSE!</a>`

    } else if 
    ((random == rockCpu && myChoise.includes("paper"))
    || (random == paperCpu && myChoise.includes("scissors")) 
    || (random == scissorsCpu && myChoise.includes("rock"))) {
        playAgain.style.backgroundColor = "green";
        playAgain.innerHTML = `<a href="./index.html">YOU WIN!</a>`
    }
}