function pen() {
    const mode = document.getElementById("penMode");
    let elem = mode.textContent.includes("OFF");
    const grid = document.getElementById("gridContainer");
    if (elem) {
        grid.style.backgroundColor = "white";
        mode.innerHTML = "ON";
    }  
    else {
        grid.style.backgroundColor = "red";
        mode.innerHTML = "OFF";
    }     
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
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "#dfd3bb";
    }
}


// function pen(isClicked) {
//     // make it so it draws on first click and stops on second

//     // check if its first click
//     if (isClicked == "false") { 
//         isClicked = "true";
//         const element = document.getElementById("gridContainer");
//         element.style.backgroundColor = "blue";
//         // make code for hover
//     }
//     // check if its second click
//     else if (isClicked == "true"){
//         isClicked = "false";
//         const element = document.getElementById("gridContainer");
//         element.style.backgroundColor = "red";
//     }
// }

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
