/* <div class="col s12 m6 todo">
<div class="card-panel">
    <input type="checkbox" id="tarea-1" />
    <label for="tarea-1">
        Tarea 1.                        
    </label>
</div>
</div> */
let todoId;

const app = {
    init() {
        $('#todo-form').submit(app.addTodo);
    },
    addTodo(event) {
        event.preventDefault();
        const {
            value: todo
        } = document.getElementById('todo');

        todoId = `todo-${app.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId).click(app.check);
        const $todoText = $('<label />').attr('for', todoId).text(todo);

        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);

        app.counter = app.counter + 1;

    },
    counter: 0,
    check() {
        let change = this.nextSibling;
        change.style.textDecoration = "line-through"
        document.getElementById(todoId).addEventListener("click", app.uncheck);

    },
    uncheck() {
        let unchanged = this.nextSibling;
        unchanged.style.textDecoration = "none";
    }
};

$(document).ready(app.init);