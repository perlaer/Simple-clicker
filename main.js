let score = 0;
let multi = 1;
let multicost = 30;

function incScore() {
  score += multi;
  document.getElementById("score").innerText = "score: " + score;
  document.getElementById("multi").innerText = "multi: " + multi;
}

function incMulti() {
  if (score >= multicost) {
    multi += 1;
    score -= multicost;
    multicost *= 1.2;
    multicost = Math.floor(multicost);
    document.getElementById("mbutton").innerText = "UPG multi by 1 (cost " + multicost + ")"
    document.getElementById("multi").innerText = "multi: " + multi;
    document.getElementById("score").innerText = "score: " + score;
  }
}