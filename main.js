function addToDoItem() {
  const newItem = document.getElementById("ToDoItemInput").value;
  const Priority = document.getElementById("PriorityInput").value;
  switch (Priority) {
    case "1":
      document.getElementById("ListItem1").textContent = newItem;
      break;
    case "2":
      document.getElementById("ListItem2").textContent = newItem;
      break;
    case "3":
      document.getElementById("ListItem3").textContent = newItem;
      break;
    case "4":
      document.getElementById("ListItem4").textContent = newItem;
      break;
    case "5":
      document.getElementById("ListItem5").textContent = newItem;
      break;
    default:
      console.log("error incorrect value entered");
  }
}
