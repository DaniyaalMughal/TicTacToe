const result = document.getElementById("result");
const boxes = document.getElementsByClassName("box");
const start = document.querySelector(".btn");

let playerOne = true;
let playerTwo = false;

const Check = () => {
  const [b1, b2, b3, b4, b5, b6, b7, b8, b9] = Array.from(boxes);

  if (
    b1.classList.contains("X") &&
    b2.classList.contains("X") &&
    b3.classList.contains("X")
  ) {
    result.innerHTML = "Player one wins";
    Finish();
  } else if (
    b4.classList.contains("X") &&
    b5.classList.contains("X") &&
    b6.classList.contains("X")
  ) {
    result.innerHTML = "player one wins";
    Finish();
  } else if (
    b7.classList.contains("X") &&
    b8.classList.contains("X") &&
    b9.classList.contains("X")
  ) {
    result.innerHTML = "Player one wins";
    Finish();
  } else if (
    b1.classList.contains("X") &&
    b5.classList.contains("X") &&
    b9.classList.contains("X")
  ) {
    result.innerHTML = "Player one wins";
    Finish();
  } else if (
    b3.classList.contains("X") &&
    b5.classList.contains("X") &&
    b7.classList.contains("X")
  ) {
    result.innerHTML = "Player one wins";
    Finish();
  } else if (
    b1.classList.contains("X") &&
    b4.classList.contains("X") &&
    b7.classList.contains("X")
  ) {
    result.innerHTML = "Player one wins";
    Finish();
  } else if (
    b2.classList.contains("X") &&
    b5.classList.contains("X") &&
    b8.classList.contains("X")
  ) {
    result.innerHTML = "player one wins";
    Finish();
  } else if (
    b3.classList.contains("X") &&
    b6.classList.contains("X") &&
    b9.classList.contains("X")
  ) {
    result.innerHTML = "Player one wins";
    Finish();
  }

  // Player two
  else if (
    b1.classList.contains("O") &&
    b2.classList.contains("O") &&
    b3.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else if (
    b4.classList.contains("O") &&
    b5.classList.contains("O") &&
    b6.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else if (
    b7.classList.contains("O") &&
    b8.classList.contains("O") &&
    b9.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else if (
    b1.classList.contains("O") &&
    b5.classList.contains("O") &&
    b9.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else if (
    b3.classList.contains("O") &&
    b5.classList.contains("O") &&
    b7.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else if (
    b1.classList.contains("O") &&
    b4.classList.contains("O") &&
    b7.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else if (
    b2.classList.contains("O") &&
    b5.classList.contains("O") &&
    b8.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else if (
    b3.classList.contains("O") &&
    b6.classList.contains("O") &&
    b9.classList.contains("O")
  ) {
    result.innerHTML = "Player two wins";
    Finish();
  } else {
    start.addEventListener("click", () => {
      window.location.reload();
    });
  }
};

const Finish = () => {
  // Remove Event Listener Once the player wins
  Array.from(boxes).map((box) => {
    let new_box = box.cloneNode(true);
    box.parentNode.replaceChild(new_box, box);
  });

  // Reload the document
  start.addEventListener("click", () => {
    window.location.reload();
  });
};

Array.from(boxes).map((box) => {
  box.addEventListener("click", () => {
    if (
      (box.classList.contains("X") || box.classList.contains("O")) === false
    ) {
      if (playerOne) {
        box.classList.add("X");
        playerOne = false;
        playerTwo = true;
        Check();
      } else if (playerTwo) {
        box.classList.add("O");
        playerOne = true;
        playerTwo = false;
        Check();
      }
    }
  });
});
