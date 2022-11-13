const div = document.getElementById("grid");
const header = document.getElementById("top");
const Names = document.getElementById("Names");
const p1 = document.getElementById("name1");
const p2 = document.getElementById("name2");
const divp2 = document.getElementById("p2");
const submit1 = document.getElementById("submitButton1");
const submit2 = document.getElementById("submitButton2");
const random = document.getElementById("random");
const reset = document.getElementById("reset");
const computer = document.getElementById("computer");
const one = document.getElementById("cell1");
const two = document.getElementById("cell2");
const three = document.getElementById("cell3");
const four = document.getElementById("cell4");
const five = document.getElementById("cell5");
const six = document.getElementById("cell6");
const seven = document.getElementById("cell7");
const eight = document.getElementById("cell8");
const nine = document.getElementById("cell9");
//value 1 and 2 for names entered
let value1;
let value2;
//number used for swapping turns
let number;
let count = 0
//computerNumber used so player 1 is always first
let computerNumber = 0;
let board = [one, two, three, four, five, six, seven, eight, nine];
//enable and disable used on board to start and stop clicking
function disableBoard() {
    (one.disabled = true),
    (two.disabled = true),
    (three.disabled = true),
    (four.disabled = true);
    (five.disabled = true),
    (six.disabled = true),
    (seven.disabled = true),
    (eight.disabled = true),
    (nine.disabled = true);
}
disableBoard();
function enableBoard() {
    (one.disabled = false),
    (two.disabled = false),
    (three.disabled = false),
    (four.disabled = false);
    (five.disabled = false),
    (six.disabled = false),
    (seven.disabled = false),
    (eight.disabled = false),
    (nine.disabled = false);
}
//randomClick used to generate random number and decide turn
function randomClick() {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    number = 0;
    Names.innerText = value1 + " " + "turn";
  } else if (randomNumber === 1) {
    number = 1;
    Names.innerText = value2 + " " + "turn";
  }
  enableBoard();
  random.className = "hide";
}
//turns is used on each click to swap turns and change names and disbale buttons
function turns(event) {
  count = count+1
  console.log(count)
  if (divp2.className == "p2") {
    let target = event.target;
    if (number === 0) {
      target.innerText = "X";
      number = 1;
      Names.innerText = value2 + " " + "turn";
      target.disabled = true;
    } else {
      target.innerText = "O";
      number = 0;
      Names.innerText = value1 + " " + "turn";
      target.disabled = true;
    }
  } else {
    return;
  }
  check();
}
//check used to see if someone won
function check() {
  if (one.innerText == "X" && two.innerText == "X" && three.innerText == "X"){
     count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if (four.innerText == "X" && five.innerText == "X" && six.innerText == "X"){
    count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if(seven.innerText == "X" &&eight.innerText == "X" &&nine.innerText == "X"){
    count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if(one.innerText == "X" && four.innerText == "X" && seven.innerText == "X"){
    count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if 
    (two.innerText == "X" && five.innerText == "X" && eight.innerText == "X"){
    count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if 
    (three.innerText == "X" && six.innerText == "X" && nine.innerText == "X"){
    count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if 
    (one.innerText == "X" && five.innerText == "X" && nine.innerText == "X"){
    count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if 
    (three.innerText == "X" &&five.innerText == "X" &&seven.innerText == "X"){
    count = 0
    Names.innerText = `${value1} has won!`;
    disableBoard();
    return;
  }
  if(one.innerText == "O" && two.innerText == "O" && three.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if (four.innerText == "O" && five.innerText == "O" && six.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if (seven.innerText == "O" && eight.innerText == "O" && nine.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if(one.innerText == "O" && four.innerText == "O" && seven.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if(two.innerText == "O" && five.innerText == "O" && eight.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if(three.innerText == "O" && six.innerText == "O" && nine.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if(one.innerText == "O" && five.innerText == "O" && nine.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if(three.innerText == "O" && five.innerText == "O" && seven.innerText == "O"){
    count = 0
    Names.innerText = `${value2} has won!`;
    disableBoard();
    return;
  }
  if(count===9){
    Names.innerText = "Draw"
  }
  if(divp2.className == "hide"&&count===5){
    Names.innerText = "Draw"
  }
}
//vsComputer used if computer button is clicked
function vsComputer() {
  value2 = "computer"
  divp2.className = "hide";
  div.addEventListener("click", computerTurn);
  div.addEventListener("click",check)
  div.removeEventListener("click", turns);
  random.removeEventListener("click", randomClick);
  enableBoard();
  random.className = "hide";
  computer.className = "hide"
}
//computerTurn is used for player 1 picks and for computer to pick randomly
function computerTurn(event) {
  count = count+1
  let target = event.target;
  if (computerNumber == 0) {
    Names.innerText = `${value1}'s turn`;
    target.innerText = "X";
    target.disabled = true;
    for (let i = 0; i < board.length; i++) {
      let num1 = Math.floor(Math.random() * 9);
      let pick = board[num1];
      if (pick.innerText == "X" || pick.innerText == "O") {
        continue;
      } else {
        pick.innerText = "O";
        pick.disabled = true;
        return;
      }
    }
  }
}
div.addEventListener("click", turns);
computer.addEventListener("click", vsComputer);
submit1.addEventListener("click", function () {
  if (divp2.className == "hide") {
    value1 = p1.value;
    p1.value = ""
    Names.innerText = `${value1}'s turn`
  }else{
    value1 = p1.value;
  p1.value = "";
  }
});
submit2.addEventListener("click", function () {
  value2 = p2.value;
  p2.value = "";
  computer.className = "hide";
  div.addEventListener("click", turns);
  random.addEventListener("click", randomClick);
});
//reset game
reset.addEventListener("click", function () {
  one.innerText = "";
  two.innerText = "";
  three.innerText = "";
  four.innerText = "";
  five.innerText = "";
  six.innerText = "";
  seven.innerText = "";
  eight.innerText = "";
  nine.innerText = "";
  value1 = "";
  value2 = "";
  p1.value = "";
  p2.value = "";
  Names.innerText = "";
  disableBoard();
  random.className = "random";
  divp2.className = "p2";
  computer.className = "";
  count = 0
  div.removeEventListener("click", computerTurn);
  div.removeEventListener("click",check)
});
