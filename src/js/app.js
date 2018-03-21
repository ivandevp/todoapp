const app = {
    init() {
        $('#todo-form').submit(app.addTodo);
    },
    addTodo(event) {
        event.preventDefault();

        const { value: todo } = document.getElementById('todo');
        let todoId = `todo-${app.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId).click(app.lineThrough);
        const $todoText = $('<label />').attr('for', todoId).text(todo)

        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoContainer.append($todoCard);
        $('#todos').append($todoContainer);

        app.counter = app.counter + 1;
        $('#todo').val("");
    },
    lineThrough() {
      if(this.checked){
        $(this.nextSibling).css({ textDecoration: 'line-through' })
      }else {
        $(this.nextSibling).css({ textDecoration: 'none' })
      }
    },
    counter: 0
};

$(document).ready(app.init);
