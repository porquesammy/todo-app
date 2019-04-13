//jshint esversion:6

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const ulEl = document.getElementById('task-ul');

addBtn.addEventListener('click', function () {
    let addTasksText = input.value;
    let currentUl = ulEl.innerHTML;
    if (0 < input.value.length && input.value !== " ") {
        ulEl.innerHTML = currentUl + " <li>" + addTasksText + "</li>";  
        input.value = "";    
    }
});