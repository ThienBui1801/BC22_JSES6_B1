"use strict";

const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermilion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

// let index = 0;

const renderHtml = () => {
  let content = "";
  for (let i = 0; i < colorList.length; i++) {
    content += `
      <button class="color-button ${colorList[i]}" onclick=changeColor()></button>
    `;
  }

  document.getElementById("colorContainer").innerHTML = content;
};

renderHtml(colorList);

const changeColor = () => {
  const btnClick = document.querySelectorAll(".color-button");
  
  for (let i = 0; i < colorList.length; i++) {
    let item = colorList[i];
    btnClick[i].addEventListener("click", () => {
      // let item = colorList;
      console.log(item);
      // btnClick[i].className = `color-button ${item} active`;
      document.getElementById("house").className = `house ${item}`;
    });
  }

};
