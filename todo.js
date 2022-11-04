const todoItemTemplate = ({id,text,isDone}) => `
<li class="todo-item" data-id="${id}">
            <input type="checkbox" name="todo-done"${isDone ? 'checked' : ''}/>
            <span>${text}</span>
            <button class="button delete">X</button>
        </li>`;

const items = [
    {
        id: '1',
        text: "lorem ipsum",
        isDone: true,
    },
    {
        id: '2',
        text: "dfdldf nn",
        isDone: true,
    },
    {
        id: '3',
        text: "nmkr nnr",
        isDone: true,
    },
];

const refs = {
    todoList: document.querySelector('.todo-list'),
};

const render = () => {
    const list = items.map(todoItemTemplate).join('');

    refs.todoList.innerHTML = '';
    refs.todoList.insertAdjacentHTML('beforeend', list);
};

const handleAddItem = () =>{
    const newTodo = {
        id: '1',
        text: "lorem ipsum",
        isDone: true,
    };
    items.push(newTodo);
    render();
}

const handleRemoveItem = () => {
    items.shift();
    render();
};



render();

setTimeout(handleAddItem,2000);
setTimeout(handleRemoveItem, 4000);