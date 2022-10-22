const body = document.querySelector("body");
const createGrid = document.createElement("div");
createGrid.id = "grid";
body.appendChild(createGrid);
const grid = document.getElementById("grid");



for (i = 0; i < 4; i++) {
  const createRow = document.createElement("div");
  createRow.className = "row";
  createRow.id = `row${i + 1}`;
  grid.appendChild(createRow);
  const rowDiv = document.getElementById(`row${i + 1}`);

  for (j = 0; j < 4; j++) {
    const colDiv = document.createElement("div");
    colDiv.className = 'column';
    rowDiv.appendChild(colDiv);
  };
};

