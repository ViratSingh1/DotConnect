// SCRIPT TO INSERT GRID IN THE PAGE

const table = document.getElementById("grid");
window.TABLE_SIZE = [6, 7];

for (let row = 0; row < TABLE_SIZE[0]; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < TABLE_SIZE[1]; col++) {
        const td = document.createElement("td");
        td.className = "col";
        const button = document.createElement("button");
        td.appendChild(button);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}