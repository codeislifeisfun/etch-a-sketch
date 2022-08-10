//"use strict"

function buildGrid(boxesPerRow) {
    const grid = document.querySelector(".grid");
    const pxPerBox = 960/boxesPerRow;
    grid.style.gridTemplateColumns = `repeat(${boxesPerRow},1fr)`;
    grid.style.width = "960px";
    for (let i=0; i<boxesPerRow**2; i++){
        const div = document.createElement("div");
        div.classList.add('box');
        grid.appendChild(div);
        div.style.width = `${pxPerBox}px`;
        div.style.height = `${pxPerBox}px`;
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
    }));

    const gridSize = document.querySelector('gridSize');
    gridSize.textContent = `Current dimension is ${boxesPerRow} X ${boxesPerRow}`;
}

function resizeGrid(){
    const grid = document.querySelector(".grid");
    const size = +prompt('How many squares per side would you like (5 to 100)?');
    console.log(size);
    if (!size || Number.isNaN(size) || size<5 || size>100) return;
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    buildGrid(size);
}

buildGrid(64);
const gridSizeBtn = document.querySelector('button');
gridSizeBtn.addEventListener('click', resizeGrid);


