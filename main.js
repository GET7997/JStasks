var SizeBtn = document.querySelector("button");
var dive = document.querySelector(".userProfile");

function changeSize() {
  dive.classList.toggle("Size");
}
SizeBtn.onclick = changeSize;
