import todoItemTemplate from "./todoItemTemplate.js";

import mockData from "./mockData.js";

const items = mockData;

const refs = {
    todoList: document.querySelector('.todo-list'),
    form: document.querySelector(',form'),
    sortBy: document.querySelector('.sort-by'),
};

const render = () => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', list);
};

const AddItem = (text) =>{
    const newTodo = {
        id: uuid.v4(),
        text,
        isDone: false,
    };
    items.push(newTodo);
    render();
}

const handleRemoveItem = () => {
    items.shift();
    render();
};

const handleSubmit =(e) => {
    e.preventDefault();
    addItem(e.target.elements.text.value);
}

render();


// ------------ event listeners--------
refs.form.addEventListener('submit',handleSubmit);