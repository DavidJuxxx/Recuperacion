var nombre_tareas = [];
var estado_tareas = [];
var btn_guardar_tarea = document.getElementById('btn_guardar_tarea');

btn_guardar_tarea.addEventListener('click', function (event) {
    let text_nombre_tarea = document.getElementById('text_nombre_tarea');
    if (text_nombre_tarea == '') {
        console.log('Debe ingresar una tarea');
        return;
    }

    nombre_tareas.push(text_nombre_tarea.value);
    estado_tareas.push(false);
    mostrarTareas();
    text_nombre_tarea.value="";
})

function mostrarTareas() {
    var lista_tareas = document.getElementById('lista_tareas');
    lista_tareas.innerHTML="";
    nombre_tareas.forEach(function (tarea,posicion) {
        let element_label = document.createElement('label');
        element_label.classList.add('list-group-item');
        element_label.textContent = tarea;

        let element_input = document.createElement('input');
        element_input.classList.add(['form-check-input','me-1']);
        element_input.type = "checkbox";

        let btn_eliminar = document.createElement('button');
        btn_eliminar.classList.add('btn','btn-danger');
        btn_eliminar.type="button";
        btn_eliminar.textContent="ELIMINAR";

        element_label.appendChild(element_input);
        element_label.appendChild(btn_eliminar);
        lista_tareas.appendChild(element_label);
        


        element_input.addEventListener('change', function(event){
            if(element_input.checked){
                console.log('TAREA FINALIZADA');
                cambiarEstado(event,posicion);
            }else{
                console.log('TAREA PENDIENTE');
            }
        })

        btn_eliminar.addEventListener('click', function(event){
            eliminar(posicion);
            
        })

       console.log(nombre_tareas)
    })
}



function eliminar(posicion){
    nombre_tareas.splice(posicion,1);
    estado_tareas.splice(posicion,1);
    mostrarTareas();
}

function cambiarEstado(event, posicion){
    console.log(event.target, posicion);
}