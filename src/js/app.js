/* <div class="col s12 m6 todo">
<div class="card-panel">
    <input type="checkbox" id="tarea-1" />
    <label for="tarea-1">
        Tarea 1.
    </label>
</div>
</div> */

const app = {
    init() {
        $('#todo-form').submit(app.addTodo);
    },
    addTodo(event) { //Cuando se da click al botón se hace lo siguiente
        event.preventDefault();//Previene el evento que tiene por defecto el submit
        const { value: todo } = document.getElementById('todo');//Trae el valor que tiene el textarea de entrada

        let todoId = `todo-${app.counter + 1}`; //Genera los id de acuerdo al contador
        // Crea la siguiente plantilla

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);



        // Va agregando cada uno de los hijos
        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);

        app.counter = app.counter + 1; //Genera el contador

        // Cuando se da clock en el checkbox se tacha la tarea
        $todoCheckbox.change(function(){ //el evento que detona la acción es el "label" creado
          if (this.checked){//Cuando al propiedad checked es true
            $todoText.css("text-decoration","line-through");//Agrega el tachado
          }
          else {
            $todoText.css("text-decoration","none");//Cuando la porpiedad checked es false quita el tachado
          }
        })

    },
    counter: 0//Inicia el contador en cero
};

$(document).ready(app.init);
