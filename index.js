// const fillBoard = function () {
//   const board = document.getElementById("bingoBoard");
//   for (let i = 0; i < 76; i++) {
//     const number = document.createElement("div");
//     const text = i + 1;
//     number.innerText = text;
//     board.appendChild(number);
//     number.classList.add("numberClass");
//   }
// };

// const generateRandomNumberBoard = function () {
//   let h2 = document.createElement("h2");
//   h2.innerText = "Player Board";
//   const playerBoard = document.getElementById("playerBoard");
//   playerBoard.appendChild(h2);
//   for (let i = 0; i < 24; i++) {
//     let randomNumber = Math.ceil(Math.random() * 76);
//     const number = document.createElement("div");
//     //const text = i + 1;
//     number.innerText = randomNumber;
//     playerBoard.appendChild(number);
//     number.classList.add("numberClass");
//   }
// };
// numArr = [];
// const randomizer = function () {
//   let boardNumbers = document.querySelectorAll("#bingoBoard .numberClass");
//   for (let i = 0; i < boardNumbers.length; i++) {
//     console.log(boardNumbers);
//     numArr.push(i.innerText);
//     let randomIndex = Math.floor(Math.random() * numArr.length);
//     let randomnumber = numArr[randomIndex];
//     numArr.splice(randomIndex, 1);
//     console.log(numArr);
//     const selectedNumber = document.querySelectorAll(
//       "#bingoBoard .numberClass"
//     );
//     console.log(selectedNumber);
//     selectedNumber[randomnumber - 1].classList.add("selectedNumberClass");
//     return randomnumber;
//   }
//   console.log(numArr);
//   //   let bingoNumbers = document.getElementsByClassName("numberClass");

//   //   let randomNumber = Math.ceil(Math.random() * 76);

//   //   let selectedNumber = bingoNumbers[randomNumber - 1];
// };
// window.onload = function () {
//   fillBoard();
// };

const generateMainBoard = function () {
  const board = document.querySelector("#bingoBoard");
  for (let i = 0; i < 76; i++) {
    board.innerHTML += `<div class='numberClass'>${i + 1}</div>`;
  }
};

const fillArray = function () {
  const arr = [];
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1);
  }
  return arr;
};

const getRandomNum = function (numbers) {
  const randIndex = Math.floor(Math.random() * numbers.length);
  const random = numbers[randIndex];
  numbers.splice(randIndex, 1);

  return random;
};

const generateRandNumber = function (numbers) {
  const random = getRandomNum(numbers);

  const randNumDiv = document.getElementById("randNum");
  if (random !== undefined) {
    randNumDiv.innerText = "Number: " + random;
  } else {
    randNumDiv.innerText = "Game is finished";
  }

  const cells = document.querySelectorAll(".main-board .cell");
  cells[random - 1].classList.add("highlight");

  const userCells = document.querySelectorAll(".user-board .cell");
  for (let cell of userCells) {
    if (parseInt(cell.innerText) === random) {
      cell.classList.add("highlight");
    }
  }
};

const generateUserBoards = function () {
  const usersNumber = document.getElementById("usersNumber").value;
  const container = document.querySelector(".container");
  if (parseInt(usersNumber) > 0) {
    for (let i = 0; i < parseInt(usersNumber); i++) {
      const numbers = fillArray();
      const board = document.createElement("div");
      board.className = "board user-board";
      for (let i = 0; i < 24; i++) {
        const random = getRandomNum(numbers);
        board.innerHTML += `<div class='cell'>${random}</div>`;
      }
      container.appendChild(board);
    }
  }
};

window.onload = function () {
  let numbers = fillArray();
  generateMainBoard();
  randBtn.addEventListener("click", function () {
    generateRandNumber(numbers);
  });
  const userBoardBtn = document.getElementById("userBoardBtn");
  userBoardBtn.addEventListener("click", generateUserBoards);
};
