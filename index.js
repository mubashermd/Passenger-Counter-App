let counterEl = document.getElementById("count-el");
let saveEl =  document.getElementById("save-el");
let counter = 0;

function countIncrement() {
    counter += 1;
    counterEl.textContent = counter;
}

function saveCount() {
    saveEl.textContent += `${counter} -`;
    counter = 0;
    counterEl.textContent = counter;
}


