const container = document.querySelector(".container");

let div16 = [];

for (let i = 1; i <= 256; i++) {

    const div = document.createElement("div");
    div.className = "square"
    div16.push(div);

}

div16.forEach(element => {
    container.appendChild(element);
});