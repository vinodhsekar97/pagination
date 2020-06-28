let my_data = data;
let len = my_data.length;
let selected = 0;
let totalPgs = 0;
document.addEventListener("DOMContentLoaded", function () {
  setVal(5);
});

function setVal(val, pageNum = 0) {
  totalPgs = Math.ceil(len / val);
  createBtns(totalPgs);
  fillTable(pageNum, val);
}

function createBtns(val) {
  selected = 0;

  let parent = document.getElementById("numBtns");
  parent.innerHTML = "";
  for (let index = 0; index < val; index++) {
    let btn = document.createElement("button");
    btn.innerHTML = index + 1;
    btn.id = "btn" + index;
    btn.className = "";
    btn.onclick = function () {
      fillTable(index, document.getElementsByTagName("select")[0].value);
      setSelected(index);
    };
    parent.appendChild(btn);
  }
  setSelected(0);
}

function fillTable(pageNum, val) {
  let parent = document.getElementById("table");
  parent.innerHTML = "";
  for (let index = 0; index < val; index++) {
    let datIndx = pageNum * val + index;
    let row = document.createElement("tr");
    row.innerHTML = `<td>${my_data[datIndx].id}</td> <td>${my_data[datIndx].name}</td> <td>${my_data[datIndx].email}</td>`;
    parent.appendChild(row);
  }
}
function setSelected(index) {
  let btn1 = document.getElementById("btn" + selected);
  btn1.className = "";
  selected = index;
  btn1 = document.getElementById("btn" + index);
  btn1.className = "btnHl";
}
function prev() {
  if (selected > 0) {
    setSelected(selected - 1);
    fillTable(selected, document.getElementsByTagName("select")[0].value);
  }
}
function next() {
  if (selected < totalPgs - 1) {
    setSelected(selected + 1);
    fillTable(selected, document.getElementsByTagName("select")[0].value);
  }
}