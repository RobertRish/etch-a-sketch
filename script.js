const body = document.querySelector("body");
const grid = document.createElement("div");
grid.id = "grid"
body.appendChild(grid);


for (i = 0; i < 4; i++) {
  const div = document.createElement("div");
  div.id = `row${i + 1}`;
  grid.appendChild(div);
  const rowDiv = document.getElementById(`row${i + 1}`);

  for (j = 0; j < 4; j++) {
    const colDiv = document.createElement("div");
    colDiv.className = `column${j + 1}`;
    rowDiv.appendChild(colDiv);
  };
};

