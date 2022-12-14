$("body").append("<div></div>");
$("div").attr("id", "grid");

// Creates grid

for (i = 0; i < 4; i++) {
  const createRow = document.createElement("div");
  createRow.className = "row";
  createRow.id = `row${i + 1}`;
  grid.appendChild(createRow);
  const rowDiv = document.getElementById(`row${i + 1}`);

  for (j = 0; j < 4; j++) {
    const colDiv = document.createElement("div");
    colDiv.className = "column";
    rowDiv.appendChild(colDiv);
  }
}

// New event handler

$("button").click(function () {
  const pixels = window.prompt(
    "Enter the number of pixels per side (it'll be a perfect square so only enter one numerical value) you would like your sketch pad to have: (Maximum: 100)"
  );
  $("#grid").remove();
  $("body").append("<div></div>");
  $("body > div").attr("id", "newGrid");
  function createNewGrid(pixels) {
    for (i = 0; i < pixels; i++) {
      const createRow = document.createElement("div");
      createRow.className = "row";
      createRow.id = `row${i + 1}`;
      newGrid.appendChild(createRow);
      const rowDiv = document.getElementById(`row${i + 1}`);

      for (j = 0; j < pixels; j++) {
        const colDiv = document.createElement("div");
        colDiv.className = "column";
        rowDiv.appendChild(colDiv);
      }
    }
  }
  createNewGrid(pixels);

  $(".column").hover(function () {
    $(this).addClass("color");
  });
});

// refactor hover function

$(".column").hover(function () {
  $(this).addClass("color");
});
