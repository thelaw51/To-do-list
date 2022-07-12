function addToDoItem() {
  var ul = document.getElementById("To-doList");
  var newItem = document.getElementById("ToDoItemInput");
  var li = document.createElement("li");
  li.setAttribute("id", newItem.value);
  li.appendChild(document.createTextNode(newItem.value));
  ul.appendChild(li);
}
function removeItem() {
  var ul = document.getElementById("To-doList");
  var removeItem = document.getElementById("ToDoItemInput");
  var li = document.getElementById(removeItem.value);
  ul.removeChild(li);
}

var input = document.getElementById("ToDoItemInput");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    document.getElementById("addToDoItem").click();
  }
});
