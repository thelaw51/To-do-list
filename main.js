function addToDoItem() {
  const newItem = document.getElementById("ToDoItemInput").value;
  const Priority = document.getElementById("PriorityInput").value;
  switch (Priority) {
    case "1":
      document.getElementById("To-do1Text").textContent = newItem;
      break;
    case "2":
      document.getElementById("To-do2Text").textContent = newItem;
      break;
    case "3":
      document.getElementById("To-do3Text").textContent = newItem;
      break;
    case "4":
      document.getElementById("To-do4Text").textContent = newItem;
      break;
    case "5":
      document.getElementById("To-do5Text").textContent = newItem;
      break;
    default:
      console.log("error incorrect value entered");
  }
}

var input = document.getElementById("ToDoItemInput");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    document.getElementById("addToDoItem").click();
  }
});

function removeToDoItem1() {
  document.getElementById("To-do1Text").textContent =
    document.getElementById("To-do2Text").textContent;
  document.getElementById("To-do2Text").textContent =
    document.getElementById("To-do3Text").textContent;
  document.getElementById("To-do3Text").textContent =
    document.getElementById("To-do4Text").textContent;
  document.getElementById("To-do4Text").textContent =
    document.getElementById("To-do5Text").textContent;
  document.getElementById("To-do5Text").textContent = "To-Do item";
}

function removeToDoItem2() {
  document.getElementById("To-do2Text").textContent =
    document.getElementById("To-do3Text").textContent;
  document.getElementById("To-do3Text").textContent =
    document.getElementById("To-do4Text").textContent;
  document.getElementById("To-do4Text").textContent =
    document.getElementById("To-do5Text").textContent;
  document.getElementById("To-do5Text").textContent = "To-Do item";
}

function removeToDoItem3() {
  document.getElementById("To-do3Text").textContent =
    document.getElementById("To-do4Text").textContent;
  document.getElementById("To-do4Text").textContent =
    document.getElementById("To-do5Text").textContent;
  document.getElementById("To-do5Text").textContent = "To-Do item";
}

function removeToDoItem4() {
  document.getElementById("To-do4Text").textContent =
    document.getElementById("To-do5Text").textContent;
  document.getElementById("To-do5Text").textContent = "To-Do item";
}
function removeToDoItem5() {
  document.getElementById("To-do5Text").textContent = "To-Do item";
}
