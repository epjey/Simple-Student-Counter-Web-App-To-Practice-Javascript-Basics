
let count_person = document.getElementById("count_person");

let count = 0;

function increment() {

    count = count + 1;
    count_person.innerText = count;
}

let save_el = document.getElementById("save_el");

function save() {
    let PrevCount = count + " - ";
    save_el.textContent += PrevCount;

    count = 0;
    count_person.innerText = count;
    
}


