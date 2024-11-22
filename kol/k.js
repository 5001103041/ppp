const draggable = document.getElementById("draggable");
const target = document.getElementById("drop-target");

// Xử lý sự kiện dragstart
draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

// Xử lý sự kiện dragover (cho phép thả)
target.addEventListener("dragover", (event) => {
  event.preventDefault(); // Ngăn hành vi mặc định
  event.target.classList.add("dragover");
});

// Xử lý khi rời drop zone
target.addEventListener("dragleave", (event) => {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

// Xử lý sự kiện drop
target.addEventListener("drop", (event) => {
  event.preventDefault(); // Ngăn hành vi mặc định
  const id = event.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(id);
  event.target.appendChild(draggableElement); // Thêm phần tử draggable vào drop zone
  event.target.classList.remove("dragover");
});
