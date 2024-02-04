const container = document.querySelector(".container");
const btnResSmall = document.querySelector(".resSmall");
const btnResMedium = document.querySelector(".resMedium");
const btnResLarge = document.querySelector(".resLarge");
const resetButton = document.querySelector("#resetButton");

let squares = [];
let isDrawing = false;
let currentResolution = 16;

const resetGrid = function () {
    container.innerHTML = '';
    squares = [];
}

const makeGrid = function (size) {
    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");
        squares.push(div);
    }
}

const updateGrid = function (size) {
    resetGrid();
    makeGrid(size);
    const squareSize = 500 / size; // Adjust square size based on grid size
    squares.forEach(element => {
        container.appendChild(element);
        element.style.width = squareSize + "px";
        element.style.height = squareSize + "px";

        element.addEventListener(
            "mousedown",
            () => {
                isDrawing = true;
                element.style.backgroundColor = "yellow";
                element.style.border = "none";
            },
        );
        element.addEventListener(
            "mouseenter",
            () => {
                if (isDrawing) {
                    element.style.backgroundColor = "yellow";
                    element.style.border = "none";
                }
            },
        )
    });

    document.addEventListener("mouseup", () => {
        isDrawing = false;
    });
}

updateGrid(currentResolution);

btnResSmall.addEventListener("click", function () {
    currentResolution = 16;
    updateGrid(16);
});

btnResMedium.addEventListener("click", function () {
    currentResolution = 32;
    updateGrid(32);
});

btnResLarge.addEventListener("click", function () {
    currentResolution = 64;
    updateGrid(64);
});

resetButton.addEventListener("click", function () {
    updateGrid(currentResolution);
});
