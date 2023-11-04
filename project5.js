// variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert("Please enter a task!")
    }
    else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    // check and delete btn functionality
    let checked = false;
    checkBtn.addEventListener('click', function () {
        if (checked === false) {
            checkBtn.parentElement.style.textDecoration = 'line-through';
            checked = true;
        }
        else {
            checkBtn.parentElement.style.textDecoration = 'none';
            checked = false;
        }
    });

    deleteBtn.addEventListener('click', function (e) {

        let target = e.target;
        target.parentElement.parentElement.remove();
    });

});