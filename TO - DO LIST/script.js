// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    // Check if the input is not empty
    if (taskText.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
