const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load the HTML file into JSDOM
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
let dom;
let document;
let window;

describe('ToDo App', () => {
  beforeEach(() => {
    // Initialize JSDOM with the loaded HTML and script execution allowed
    dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    window = dom.window;
    document = window.document;
    global.document = document;
    global.window = window;

    // Mock LocalStorage
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
      store: {}
    };

    // Execute the script file
    const scriptContent = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');
    dom.window.eval(scriptContent);
  });

  test('should render the current date', () => {
    const dateElement = document.querySelector('#date-time');
    expect(dateElement.textContent).toBeTruthy();
  });

  test('should add a new task to the list', () => {
    const input = document.querySelector('#task-input');
    const deadline = document.querySelector('#deadline-input');
    const form = document.querySelector('form');

    input.value = 'Test Task';
    deadline.value = '2025-12-31';
    form.dispatchEvent(new dom.window.Event('submit'));

    const taskContent = document.querySelector('.task-content');
    const taskDeadline = document.querySelector('.task-deadline');

    expect(taskContent.textContent).toBe('Test Task');
    expect(taskDeadline.textContent).toBe('Deadline: 2025-12-31');
  });

  test('should not add a task if input is empty', () => {
    const input = document.querySelector('#task-input');
    const deadline = document.querySelector('#deadline-input');
    const form = document.querySelector('form');

    input.value = '';
    deadline.value = '';
    form.dispatchEvent(new dom.window.Event('submit'));

    const tasks = document.querySelectorAll('.task');
    expect(tasks.length).toBe(0);
  });

  test('should not add a task if deadline is empty', () => {
    const input = document.querySelector('#task-input');
    const deadline = document.querySelector('#deadline-input');
    const form = document.querySelector('form');

    input.value = 'Test Task';
    deadline.value = '';
    form.dispatchEvent(new dom.window.Event('submit'));

    const tasks = document.querySelectorAll('.task');
    expect(tasks.length).toBe(0);
  });

  test('should delete a task from the list', () => {
    const input = document.querySelector('#task-input');
    const deadline = document.querySelector('#deadline-input');
    const form = document.querySelector('form');

    input.value = 'Test Task';
    deadline.value = '2025-12-31';
    form.dispatchEvent(new dom.window.Event('submit'));

    const deleteButton = document.querySelector('.delete-button');
    deleteButton.click();

    const tasks = document.querySelectorAll('.task');
    expect(tasks.length).toBe(0);
  });

  test('should persist tasks in localStorage', () => {
    const input = document.querySelector('#task-input');
    const deadline = document.querySelector('#deadline-input');
    const form = document.querySelector('form');

    input.value = 'Test Task';
    deadline.value = '2025-12-31';
    form.dispatchEvent(new dom.window.Event('submit'));

    expect(global.localStorage.setItem).toHaveBeenCalledWith('taskArray', JSON.stringify([{ input: 'Test Task', deadline: '2025-12-31' }]));
  });

  test('should load tasks from localStorage on page load', () => {
    global.localStorage.getItem.mockReturnValue(JSON.stringify([{ input: 'Persisted Task', deadline: '2025-12-31' }]));

    // Reload the JSDOM instance to simulate page load
    dom.window.document.body.innerHTML = html;
    const scriptContent = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');
    dom.window.eval(scriptContent);

    const taskContent = document.querySelector('.task-content');
    const taskDeadline = document.querySelector('.task-deadline');

    expect(taskContent.textContent).toBe('Persisted Task');
    expect(taskDeadline.textContent).toBe('Deadline: 2025-12-31');
  });
});
