let score = 0;
let multi = 1;
let automulti = 0;
let multicost = 30;
let automulticost = 30;

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

function incMultiAuto() {
  if (score >= automulticost) {
    automulti += 1;
    score -= automulticost
    automulticost *= 1.2;
    automulticost = Math.floor(automulticost);
    document.getElementById("abutton").innerText = "UPG auto by 1 (cost " + automulticost + ")"
    document.getElementById("automulti").innerText = "auto multi: " + automulti;
    document.getElementById("score").innerText = "score: " + score;
  }
}

function incScoreAuto() {
  score += automulti;
  document.getElementById("score").innerText = "score: " + score;
}

setInterval(incScoreAuto, 1000);