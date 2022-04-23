'use strict';


const hoverText = () => {
  let content = '';
  
  let text = document.getElementsByClassName("heading")[0].textContent;
  
  const arrText = [...text];
  for (let i = 0; i < arrText.length; i++) {
    let item = arrText[i];
    content += `
      <span>${item}</span>
    `
  }
  document.getElementsByClassName('heading')[0].innerHTML = content;

}

hoverText();
