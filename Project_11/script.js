const todo_form = document.querySelector('form');
const todo_input = document.getElementById('todo-input');
const todo_list = document.getElementById('todo-list');

todo_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task_text = todo_input.value.trim();
    if (task_text === '') {
        alert('Please enter a valid task.');
        return;
    }
    const list_item = document.createElement('li');
    list_item.textContent = task_text;

    list_item.addEventListener('click', () => {
        list_item.classList.toggle('completed');
    });


    const remove_button = document.createElement('button');
    remove_button.textContent = 'Remove';
    remove_button.addEventListener('click', () => {
        todo_list.removeChild(list_item);
    });

    list_item.appendChild(remove_button);
    todo_list.appendChild(list_item);
    todo_input.value = '';
})