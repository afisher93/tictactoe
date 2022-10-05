function resetGame(e) {
  window.location.reload(true);
}

let restart = document.querySelector("button");

let cells = document.querySelectorAll(".row>div");

let count = 0;

let XturnBlob = document.querySelector(".Xturn");
let OturnBlob = document.querySelector(".Oturn");

let boardWin = document.querySelector(".panel");

let win = { outcome: false, winner: "" };

cells.forEach(function (div) {
  div.addEventListener("click", makePlay);
});

restart.addEventListener("click", resetGame);

function makePlay(e) {
  if (win.outcome == false) {
    if (e.target.textContent == "" && !(count % 2)) {
      e.target.textContent = "X";
      e.target.style.backgroundColor = "lightgrey";
      e.target.style.color = "cornflowerblue";
      count++;
      console.log(count);
      console.log(e.target);
    } else if (e.target.textContent == "" && count % 2) {
      e.target.textContent = "O";
      e.target.style.backgroundColor = "lightgrey";
      e.target.style.color = "red";
      e.target.textSize = 25;
      count++;
      console.log(count);
      console.log(e.target);
    }

    if (!(count % 2)) {
      OturnBlob.style.opacity = "0";
      XturnBlob.style.opacity = "1";
    } else if (count % 2) {
      XturnBlob.style.opacity = "0";
      OturnBlob.style.opacity = "1";
    }

    if (count >= 5) {
      let test = Array.from(cells);

      if (
        test[0].textContent == "X" &&
        test[1].textContent == "X" &&
        test[2].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      } else if (
        test[3].textContent == "X" &&
        test[4].textContent == "X" &&
        test[5].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      } else if (
        test[6].textContent == "X" &&
        test[7].textContent == "X" &&
        test[8].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      }

      if (
        test[0].textContent == "O" &&
        test[1].textContent == "O" &&
        test[2].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      } else if (
        test[3].textContent == "O" &&
        test[4].textContent == "O" &&
        test[5].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      } else if (
        test[6].textContent == "O" &&
        test[7].textContent == "O" &&
        test[8].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      }

      if (
        test[0].textContent == "X" &&
        test[3].textContent == "X" &&
        test[6].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      } else if (
        test[1].textContent == "X" &&
        test[4].textContent == "X" &&
        test[7].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      } else if (
        test[2].textContent == "X" &&
        test[5].textContent == "X" &&
        test[8].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      }

      if (
        test[0].textContent == "O" &&
        test[3].textContent == "O" &&
        test[6].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      } else if (
        test[1].textContent == "O" &&
        test[4].textContent == "O" &&
        test[7].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      } else if (
        test[2].textContent == "O" &&
        test[5].textContent == "O" &&
        test[8].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      }

      if (
        test[0].textContent == "X" &&
        test[4].textContent == "X" &&
        test[8].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      } else if (
        test[6].textContent == "X" &&
        test[4].textContent == "X" &&
        test[2].textContent == "X"
      ) {
        win = { outcome: true, winner: "X Wins!" };
      }

      if (
        test[0].textContent == "O" &&
        test[4].textContent == "O" &&
        test[8].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      } else if (
        test[6].textContent == "O" &&
        test[4].textContent == "O" &&
        test[2].textContent == "O"
      ) {
        win = { outcome: true, winner: "O Wins!" };
      }

      if (win.outcome == false && count == 9) {
        win = { outcome: true, winner: "Draw.." };
      }

      if (win.outcome == true) {
        if (win.winner == "O Wins!") {
          OturnBlob.style.opacity = "0";
          XturnBlob.style.opacity = "0";
          boardWin.style.fontSize = "38px";
          boardWin.style.zindex = "1";
          boardWin.style.backgroundColor = "red";
          boardWin.textContent = win.winner;
          result = win.winner;
          console.log(result);
        } else if (win.winner == "Draw..") {
          OturnBlob.style.opacity = "0";
          XturnBlob.style.opacity = "0";
          boardWin.style.fontSize = "38px";
          boardWin.style.zindex = "1";
          boardWin.style.backgroundColor = "grey";
          boardWin.textContent = win.winner;
          result = win.winner;
          console.log(result);
        } else if (win.winner == "X Wins!") {
          OturnBlob.style.opacity = "0";
          XturnBlob.style.opacity = "0";
          boardWin.style.fontSize = "38px";
          boardWin.style.zindex = "1";
          boardWin.style.backgroundColor = "cornflowerblue";
          boardWin.textContent = win.winner;
          result = win.winner;
          console.log(result);
        }
      }
    }
  }
}
