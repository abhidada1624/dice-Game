

document.querySelectorAll("button")[0].addEventListener("click", answer);

function answer() {
  var rand1 = Math.floor(Math.random() * 6) + 1;
  var rand2 = Math.floor(Math.random() * 6) + 1;
  var image1val = "images/dice" + rand1 + ".png";
  var image2val = "images/dice" + rand2 + ".png";

  if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (rand1 < rand2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw !!!";
  }
  document.querySelectorAll("img")[0].setAttribute("src", image1val);
  document.querySelectorAll("img")[1].setAttribute("src", image2val);
}
