const ventana = document.querySelector('.colors');
const hex = document.querySelector('.hex');
const btn = document.getElementById('btn');

function generarColor() {
    let colorRandom = '0123456789ABCDEF';
    let numColor = '#';

    for (let i = 0; i < 6; i++) {
        let aleatory = Math.floor(Math.random() * 16);
        numColor += colorRandom[aleatory];
        
    }
    return numColor;
}

btn.addEventListener('click', () => {
    let llamarColor = generarColor();
    hex.textContent = llamarColor;
    hex.style.backgroundColor = llamarColor;
    ventana.style.backgroundColor = llamarColor;
})


// -------------------------------------

const menu = document.getElementById('menu')
const cajaOne = document.querySelector('.caja1')
const cajaTwo = document.querySelector('.caja2')

menu.addEventListener('click', () => {
    cajaOne.classList.toggle('active');
    cajaTwo.classList.toggle('activeTwo');
})

// -----------------------------------------

function copic() {
    let color = getComputedStyle(document.querySelector('.colors')).backgroundColor;
    let colorText = document.querySelector('.hex').textContent;

    return color, colorText;
}
    

// ---------------------------------------------


function like() {
    let guardar = copic()
    let trash = `<i class="bi bi-trash"></i>`

    let historia = document.createElement('div')
    historia.style.background = guardar;
    historia.className = "historia";
    historia.insertAdjacentHTML("beforeend", trash);

    let textHistoria = document.createElement('p');
    textHistoria.innerHTML = guardar;
    textHistoria.className = "texthex";

    let caja = document.createElement('div');
    caja.id = 'caja-' + Math.floor(Math.random() * 15);
    caja.append(historia);
    caja.append(textHistoria);
    caja.classList = 'caja';
    
    const borrar = document.querySelector('.history');
    borrar.addEventListener('click', () => {
        let contenido = document.getElementById(caja.id);
        contenido.remove(caja.id)
    });

    // const borrar = document.querySelector('.history')
    // borrar.addEventListener('click', () => {
    //     let contenido = document.getElementById(caja.id);
    //     contenido.remove(borrar)
    // });

    const elements = document.querySelector('.history')
    elements.append(caja);
}

// ----------------------------------

// function deleteCaja() {
//     let contenido = document.querySelectorAll('.caja');
//     contenido.forEach(function(div) {
//         div.remove()
//     })
// }

// remove.addEventListener('click', () => {
//     deleteCaja();
// })


