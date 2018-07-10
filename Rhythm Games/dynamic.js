var myCytus = document.getElementById("cytus");
console.log(myCytus);

function changeColor(){
  myCytus.style.backgroundColor = "green";
}

function changeBack(){
  myCytus.style.backgroundColor = "lightCyan"
}

paragraph.onmouseover = changeColor;
paragraph.onmouseout = changeBack;
