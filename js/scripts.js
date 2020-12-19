/*jshint esversion: 6 */

const textInput = document.querySelector("#todolist");
const submitBtn = document.querySelector("#submit1");
const clearBtn = document.querySelector("#clearList");
const ol = document.querySelector("#listOfItems");

submitBtn.addEventListener("click", addToDoItem);
clearBtn.addEventListener("click", clearList);

// functions below

function addToDoItem() {
  let item = document.getElementById("todolist");
  // create list item
  let li = document.createElement("li");
  // set id to the text entered in the input element
  li.setAttribute("id", item.value);
  let id = item.value;
  // create list item using text entered in the input element
  let textNode = document.createTextNode(item.value);
  // create cancel button and add it to list item
  let cancelBtn = document.createElement("BUTTON");
  cancelBtn.innerHTML = "X";
  cancelBtn.addEventListener("click", function () {
    removeListItem(id);
  });
  // create "Done" button
  let doneBtn = document.createElement("button");
  doneBtn.innerHTML = "Done";
  doneBtn.addEventListener("click", function () {
    strikeThrough(id);
  });

  li.append(textNode, cancelBtn, doneBtn);
  ol.appendChild(li);
}

function removeListItem(id) {
  let li = document.getElementById(id);
  li.remove();
}

function clearList() {
  // remove all list items
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
  // clear the input field and reset it to the placeholder value
  textInput.value = "";
  textInput.placeholder = textInput.placeholder;
}

function strikeThrough(id) {
  let li = document.getElementById(id);
  li.setAttribute("class", "strikethrough");
}
