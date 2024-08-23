document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const pendingTasks = document.getElementById('pending-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText, false);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText, isCompleted) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.className = isCompleted ? 'completed' : 'pending';

        const completeButton = document.createElement('button');
        completeButton.textContent = isCompleted ? 'Undo' : 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
            li.classList.toggle('pending');
            if (li.classList.contains('completed')) {
                completedTasks.appendChild(li);
                completeButton.textContent = 'Undo';
            } else {
                pendingTasks.appendChild(li);
                completeButton.textContent = 'Complete';
            }
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            li.parentElement.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(removeButton);

        if (isCompleted) {
            completedTasks.appendChild(li);
        } else {
            pendingTasks.appendChild(li);
        }
    }
});
