var taskInput = document.getElementById('taskInput');
var addTaskBtn = document.getElementById('addTaskBtn');
var taskList = document.getElementById('taskList');
function createTaskElement(taskText) {
    var li = document.createElement('li');
    var completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function () {
        li.classList.toggle('completed');
    };
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.textContent = taskText;
    li.prepend(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
addTaskBtn.addEventListener('click', function () {
    var task = taskInput.value.trim();
    if (task !== '') {
        createTaskElement(task);
        taskInput.value = '';
    }
});
