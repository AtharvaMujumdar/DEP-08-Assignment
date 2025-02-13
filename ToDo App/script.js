const date = new Date();
const options = { day: '2-digit', month: 'long', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);

document.querySelector('#date-time').textContent = formattedDate;

const addTask = (input, deadline) => {
    // Create a task section
    const taskSection = document.createElement('section');
    taskSection.className = 'task'; // Use class instead of id to support multiple tasks

    // Create a task content span
    const taskContent = document.createElement('span');
    taskContent.className = 'task-content';
    taskContent.textContent = input;

    // Create a deadline span
    const taskDeadline = document.createElement('span');
    taskDeadline.className = 'task-deadline';
    taskDeadline.textContent = `Deadline: ${deadline}`;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button delete-button';
    deleteButton.textContent = '-';

    // Add event listener to the delete button
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        let array = JSON.parse(localStorage.getItem("taskArray")) || [];
        array = array.filter(task => task.input !== input); // Remove the specific task from the array
        localStorage.setItem("taskArray", JSON.stringify(array));
        taskSection.remove(); // Remove the task section from the DOM
    });

    // Append the task content, deadline, and delete button to the task section
    taskSection.appendChild(taskContent);
    taskSection.appendChild(taskDeadline);
    taskSection.appendChild(deleteButton);

    // Append the task section to the task container
    document.querySelector('#all-task').appendChild(taskSection);
};

document.querySelector('#plus-button').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#task-input').value;
    const deadline = document.querySelector('#deadline-input').value;
    if (input === "" || deadline === "") return; // Do not add empty tasks or deadlines
    document.querySelector('#task-input').value = "";
    document.querySelector('#deadline-input').value = "";
    
    let array = JSON.parse(localStorage.getItem("taskArray")) || [];
    array.push({ input, deadline });
    localStorage.setItem("taskArray", JSON.stringify(array));

    addTask(input, deadline);
});

let array = JSON.parse(localStorage.getItem("taskArray")) || [];
if (array.length !== 0) {
    array.forEach(task => {
        addTask(task.input, task.deadline);
    });
}



