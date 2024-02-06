const container = document.querySelector(".container");

/*resolution buttons*/
const btnResSmall = document.querySelector(".resSmall");
const btnResMedium = document.querySelector(".resMedium");
const btnResLarge = document.querySelector(".resLarge");

const resetButton = document.querySelector("#resetButton");

/*color buttons*/
const colorPicker = document.querySelector(".colorPicker");
colorPicker.value = "#ffff00";
const randomColor = document.querySelector(".randomColor");

let squares = [];
let isDrawing = false;
let currentResolution = 16;
let currentColor = "yellow";

const setColor = function (element, color) {
    element.style.backgroundColor = color;
}

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
                setColor(element, currentColor);

            },
        );
        element.addEventListener(
            "mouseenter",
            () => {
                if (isDrawing) {
                    setColor(element, currentColor);
                }
            },
        )
    });

    document.addEventListener("mouseup", () => {
        isDrawing = false;
    });
}

/*resolution functions*/

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

/*color functions*/

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomColor.addEventListener("click", function () {

    squares.forEach(square => {
        square.addEventListener("mousedown", () => {
            if (isDrawing) {
                setColor(square, getRandomColor());
            }
        });
    });

    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            if (isDrawing) {
                setColor(square, getRandomColor());
            }
        });
    });

});

colorPicker.addEventListener("change", function () {

    const selectedColor = colorPicker.value;
    currentColor = colorPicker.value;

    squares.forEach(square => {
        square.addEventListener("mousedown", () => {
            if (isDrawing) {
                setColor(square, selectedColor);
            }
        });
    });

    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            if (isDrawing) {
                setColor(square, selectedColor);
            }
        });
    });

});