//Get Element
var dragContainer = document.getElementById("drag-container");
var dragLogo = document.getElementById("drag-logo");

dragContainer.addEventListener("dragover", function(ev) {
  //Khi kéo đến container

  if (ev.target.id == dragContainer.id) {
    ev.preventDefault();
    ev.target.classList.add("hover2");
  }
});

dragContainer.addEventListener("dragleave", function(ev) {
  //Khi kéo ra
  ev.target.classList.remove("hover2");
});

dragContainer.addEventListener("drop", function drop(ev) {
  //Khi thả

  if (ev.target.id !== dragContainer.id) {
    ev.preventDefault();
    ev.stopPropagation();
    return;
  } else {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    //
    ev.target.classList.add("dropped");
    //
    dragLogo.setAttribute("draggable", false);
    //
    $("#line").css("height", "900px");
    //
    $(".arrow").css("opacity", "0");
    //
    document.getElementById("map").scrollIntoView();

    // document.querySelector(".dropped::after").style.top("-10px");
  }
});

dragLogo.addEventListener("dragstart", function drag(ev) {
  ev.target.classList.add("dragging");
  ev.dataTransfer.setData("text", ev.target.id);
});

dragContainer.addEventListener("dragend", function drag(ev) {
  ev.target.classList.remove("dragging");
});
