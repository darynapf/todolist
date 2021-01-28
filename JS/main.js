"use strict";

let color = [
    "#3757D8",
    "#D837B5",
    "#37D851",
    "#D8AB37",
    "#D83754",
    "#0B97FD",
    "#98A499",
    "#00B0FF",
    "#E2B7A2",
    "#0FC796",
    "#D82C7B",
    "#F4BE01",
    "#FF7695",
  ],
  foldersList = document.querySelector(".folders__list"),
  tasksList = document.querySelector(".tasks__list"),
  foldersItem = document.querySelectorAll(".folders__list__item");

const newFolder = document.querySelector(".folders__new-folder"),
  searchInput = document.querySelector(".search-input"),
  addInput = document.querySelector(".tasks__add-input");

//FOLDERS
//Active folder
foldersList.addEventListener("click", function (event) {
  let currentFolder = event.target;
  foldersItem.forEach((e) => e.classList.remove("active-folder"));
  currentFolder.classList.add("active-folder");
  foldersItem = document.querySelectorAll(".folders__list__item");
});

//Create new folder with random marker
newFolder.addEventListener("click", function () {
  const folderItem = document.createElement("li"),
    marker = document.createElement("span"),
    editIcon = document.createElement("img");
  folderItem.className = "folders__list__item";
  folderItem.textContent = "New Folder";
  folderItem.prepend(marker);
  foldersList.append(folderItem);
  folderItem.append(editIcon);
  editIcon.classList = "folders__list__item__edit";
  editIcon.setAttribute("src", "img/edit.svg");
  editIcon.setAttribute("alt", "edit");
  marker.className = "marker";
  marker.style.background = color[Math.floor(Math.random() * color.length)];
});
//hover action
document
  .querySelectorAll(".folders__list__item")
  .forEach(e => e.addEventListener("mouseover", function () {
    document.querySelector(".folders__list__item__edit").style.display = "inline";
  }))
document
  .querySelector(".folders__list__item")
  .addEventListener("mouseout", function () {
    document.querySelector(".folders__list__item__edit").style.display = "none";
  });

  //Rename folder

  const editInput = document.createElement("input");
  editInput.setAttribute("type", "text");


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
  let taskItem = document.createElement("li"),
    checkboxHidden = document.createElement("input"),
    labelCheckbox = document.createElement("label");
  checkboxHidden.setAttribute("type", "checkbox");
  checkboxHidden.className = "checkbox-hidden";
  checkboxHidden.setAttribute("name", "checkbox");
  labelCheckbox.setAttribute("for", "checkbox");
  taskItem.className = "tasks__list__item";
  taskItem.append(checkboxHidden);
  taskItem.append(labelCheckbox);
  taskItem.append(text);
  tasksList.append(taskItem);
}
