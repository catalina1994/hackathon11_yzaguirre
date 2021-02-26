const c =console.log;

// VARIABLES
const canasta = document.getElementById('canasta-parent'),
    parent = document.getElementById('card-parent'),
    TotalCanasta =document.getElementById('canasta'),
    itemsAgregados = document.querySelector('.agregados')



// LISTENERS
initAPP();
document.addEventListener('load', initAPP)
function initAPP(){
    parent.addEventListener('click', obtenerCurso),
    canasta.addEventListener('click', eliminarCurso),
    TotalCanasta.addEventListener('click', eliminarCanasta)
}
//

// FUNCIONES
function obtenerCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('btn-block')){
        const curso = e.target.parentElement; 
        extraerDatos(curso);
    }
}
function extraerDatos(curso){
    const cursoElegido = {
        img : curso.parentElement.querySelector('.card__img').innerHTML,
        nombre : curso.querySelector('.card__title').textContent,
        cantidad : 1,
        precio : curso.querySelector('.card__precio .card__precioFinal').textContent
    
    }
    pintarCurso(cursoElegido);
}
function pintarCurso(curso) {
    let item = document.createElement('li')
    item.classList.add('canasta__item');
    img = curso.img
    nombre = curso.nombre;
    cantidad = curso.cantidad
    precio = curso.precio;

    item.innerHTML = `
        <div>${img}</div>
        <div>${nombre} </div>
        <div>${cantidad}</div>
        <div>${precio}</div>
        <div><i  class="material-icons btn secundary-color ">cancel</i></div>
    `
    itemsAgregados.appendChild(item)    
}
function eliminarCurso(e){
    if(e.target.classList.contains('btn')){
        const item = e.target.parentElement.parentElement; 
        item.remove()
    }
}
function eliminarCanasta(e){
    if(e.target.classList.contains('btn-line')){
        const hermano = e.target.previousElementSibling.querySelector('.agregados')
        while (hermano.firstChild) {
            hermano.removeChild(hermano.firstChild);
          }
        //hermano.remove()
        
    }
    
}