function createGrid() {
    let size = prompt("select grid size");
    const gridContainer = document.getElementById("gridContainer");
    for (let row = 0; row < size; row++){
        for (let column = 0; column < size; column++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${(1/size)*100}%`;
            box.style.height = `${(1/size)*100}%`;
            gridContainer.appendChild(box);
        }
    }
}
