"use strict";

let color = [
    "#3757D8",
    "#D837B5",
    "#37D851",
    "#D8AB37",
    "#D83754",
    "#0B97FD",
    "#98A499",
  ],
  foldersList = document.querySelector(".folders__list"),
  tasksList = document.querySelector(".tasks__list"),
  foldersItem = document.querySelectorAll(".folders__list__item");

const newFolder = document.querySelector(".folders__new-folder"),
  searchInput = document.querySelector(".search-input"),
  addInput = document.querySelector(".tasks__add-input");

//FOLDERS
//Active folder
foldersList.addEventListener("click", function(event){
  let currentFolder = event.target;
  foldersItem.forEach(e => e.classList.remove("active-folder"));
  currentFolder.classList.add("active-folder");
  foldersItem = document.querySelectorAll(".folders__list__item");
})

//Create new folder with random marker
newFolder.addEventListener("click", function () {
  let folderItem = document.createElement("li"),
    marker = document.createElement("span");
  folderItem.className = "folders__list__item";
  folderItem.textContent = "New Folder";
  folderItem.prepend(marker);
  foldersList.append(folderItem);
  marker.className = "marker";
  marker.style.background = color[Math.floor(Math.random() * color.length)];
});


//MAIN
//Add item with hotkey
addInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addItem(addInput.value, true);
    addInput.value = "";
  }
});

//add new Item
function addItem(text) {
  let taskItem = document.createElement("li");
  taskItem.className = "tasks__list__item";
  taskItem.textContent = text;
  tasksList.append(taskItem);
}

