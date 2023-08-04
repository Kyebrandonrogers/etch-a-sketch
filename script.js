
function pen() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = "white";
        });
    })
}

function eraser() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = "#dfd3bb";
        });
    }) 
}


function createGrid() {
    const gridContainer = document.getElementById("gridContainer");
    let size = prompt("select grid size");
    if (size <= 100) {
        removeElementsByClass("box");
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
    else {
        alert("Too big");
    }
}

function clearGrid() {
    const gridContainer = document.getElementById("gridContainer");
    const boxes = document.getElementsByClassName("box");
    let total = boxes.length;
    let size = Math.sqrt(total);
    removeElementsByClass("box");
    for (let row = 0; row < total; row++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${(1/size)*100}%`;
        box.style.height = `${(1/size)*100}%`;
        gridContainer.appendChild(box);
    }
}


function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
