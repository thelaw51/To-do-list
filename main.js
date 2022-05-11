function addToDoItem() {
  const newItem = document.getElementById("ToDoItemInput").value;
  const Priority = document.getElementById("PriorityInput").value;
  switch (Priority) {
    case "1":
      document.getElementById("To-do1").textContent = newItem;
      break;
    case "2":
      document.getElementById("To-do2").textContent = newItem;
      break;
    case "3":
      document.getElementById("To-do3").textContent = newItem;
      break;
    case "4":
      document.getElementById("To-do4").textContent = newItem;
      break;
    case "5":
      document.getElementById("To-do5").textContent = newItem;
      break;
    default:
      console.log("error incorrect value entered");
  }
}
function removeToDoItem1() {
  document.getElementById("To-do1").textContent =
    document.getElementById("To-do2").textContent;
  document.getElementById("To-do2").textContent =
    document.getElementById("To-do3").textContent;
  document.getElementById("To-do3").textContent =
    document.getElementById("To-do4").textContent;
  document.getElementById("To-do4").textContent =
    document.getElementById("To-do5").textContent;
  document.getElementById("To-do5").textContent = "To-Do item";
}
