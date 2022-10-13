const fillBoard = function () {
  const board = document.getElementById("bingoBoard");
  for (let i = 0; i < 76; i++) {
    const number = document.createElement("div");
    const text = i + 1;
    number.innerText = text;
    board.appendChild(number);
    number.classList.add("numberClass");
  }
};
let numArr = [];
const getArr = function () {
  let boardNumbers = document.querySelectorAll("#bingoBoard .numberClass");
  for (let i = 0; i < boardNumbers.length; i++) {
    numArr.push(boardNumbers[i].innerText);
  }
  console.log(numArr);
};
const generateRandomNumberBoard = function () {
  let h2 = document.createElement("h2");
  h2.innerText = "Player Board";
  const playerBoard = document.getElementById("playerBoard");
  playerBoard.appendChild(h2);
  for (let i = 0; i < 24; i++) {
    let randomNumber = Math.ceil(Math.random() * 76);
    const number = document.createElement("div");
    //const text = i + 1;
    number.innerText = randomNumber;
    playerBoard.appendChild(number);
    number.classList.add("numberClass");
  }
};

const randomizer = function () {
  let arrRandomNumbers = [];
  let randomNumber = Math.ceil(Math.random() * 76);
  console.log(randomNumber);
  //   arrRandomNumbers.push(randomNumber);

  //   console.log(arrRandomNumbers);
  //   if (arrRandomNumbers.includes(randomNumber)) {
  //      randomizer();
  //    } else {
  let selectedNumber = numArr.indexOf(randomNumber - 1);
  selectedNumber.className = "selectedNumberClass";
  console.log(selectedNumber);
  //   }
};
