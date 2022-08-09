"use strict"

const grid = document.querySelector(".grid");
const boxesPerRow = 16;
const pxPerBox = 20;

grid.style.gridTemplateColumns = `repeat(${boxesPerRow},1fr)`;
grid.style.width = `${boxesPerRow*(2+pxPerBox)}px`;
for (let i=0; i<boxesPerRow**2; i++){
    const div = document.createElement("div");
    div.classList.add('box');
    grid.appendChild(div);
    div.style.width = `${pxPerBox}px`;
    div.style.height = `${pxPerBox}px`;
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', () => box.style.background='black'));

