"use strict";

// Khối lớp 1 
const btnCalc = document.getElementById("btnKhoi1");

const calcAverage = (...points) => {
  let total = 0;
  points.forEach((point) => total += ((point) / 3))
  // console.log(total)
  return total;
};

btnCalc.addEventListener("click", () => {
  const toan = document.getElementById('inpToan').value;
  const hoa = document.getElementById('inpHoa').value;
  const ly = document.getElementById('inpLy').value;

  let content = calcAverage(toan, hoa, ly);

  document.getElementById('tbKhoi1').innerHTML = content;
});

// Khối lớp 2
const btnCalc2 = document.getElementById("btnKhoi2");

const calcAverage2 = (...points) => {
  let total = 0;
  points.forEach((point) => total += ((point) / 4))
  return total;
};

btnCalc2.addEventListener("click", () => {
  const van = document.getElementById('inpVan').value;
  const su = document.getElementById('inpSu').value;
  const dia = document.getElementById('inpDia').value;
  const eng = document.getElementById('inpEnglish').value;

  let content = calcAverage(van, su, dia, eng);

  document.getElementById('tbKhoi2').innerHTML = content;
});
