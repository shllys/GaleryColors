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