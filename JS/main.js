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
// Active folder
function addActiveFolderListener () {
  foldersItem.forEach(e => e.addEventListener("click", function(event){
    foldersItem.forEach(e => e.classList.remove("active-folder"));
    event.currentTarget.classList.add("active-folder");
  }))
}

//Create new folder with random marker
newFolder.addEventListener("click", function () {
  const folderItem = document.createElement("li"),
    marker = document.createElement("span"),
    editIcon = document.createElement("img");
  let nameFolder = document.createElement("p");
  folderItem.className = "folders__list__item";
  nameFolder.textContent = "New Folder";
  folderItem.prepend(marker);
  folderItem.append(nameFolder);
  foldersList.append(folderItem);
  folderItem.append(editIcon);
  editIcon.classList = "folders__list__item__edit";
  editIcon.setAttribute("src", "img/edit.svg");
  editIcon.setAttribute("alt", "edit");
  marker.className = "marker";
  marker.style.background = color[Math.floor(Math.random() * color.length)];
  foldersItem = document.querySelectorAll(".folders__list__item");
  hoverEditIcon();
  hoverAction();
  addActiveFolderListener();
});



//hover action
function hoverEditIcon() {
  document.querySelectorAll(".folders__list__item").forEach((e) =>
    e.addEventListener("mouseover", function (event) {
      if (!event.currentTarget.classList.contains("on-edit")) {
        event.currentTarget.querySelector(
          ".folders__list__item__edit"
        ).style.display = "inline";
      }
    })
  );
  document.querySelector(".folders__list__item").addEventListener("mouseout", function (event) {
    event.currentTarget.querySelector(".folders__list__item__edit").style.display = "none";
  });
};
hoverEditIcon()
//Change name of folder
function hoverAction() {
  document.querySelectorAll(".folders__list__item__edit").forEach((e) =>
    e.addEventListener("click", function (event) {
      defult();
      changeName(event);
    })
  );
}
hoverAction();

//come back folder defult style after hover
function defult() {
  document.querySelectorAll(".folders__list__item__rename").forEach(e => e.remove());
  document.querySelectorAll("p").forEach(e => e.style.display = "inline");
}

function changeName(event) {
  const inputRename = document.createElement("input");
  let folderName = event.currentTarget.parentElement.querySelector("p");
  inputRename.setAttribute("type", "text");
  folderName.style.display = "none";
  inputRename.setAttribute("value", folderName.textContent);
  inputRename.className = "folders__list__item__rename";
  event.currentTarget.parentElement.querySelector(".marker").after(inputRename);
  inputRename.style.borderColor = event.currentTarget.parentElement.querySelector(".marker").style.background;
  event.currentTarget.parentElement.classList.add("on-edit");
}

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
