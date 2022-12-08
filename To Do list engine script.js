let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let taskCount = 0;

addToDoButton.addEventListener('click', function () {

    taskCount++;
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = taskCount + ". " + inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
        taskCount--;
    })

}) 