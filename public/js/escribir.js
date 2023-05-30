const btnDecir = document.getElementById('btnDecir');
const texto = document.getElementById('texto');
const respuesta = document.getElementById('respuesta');
const adivinar = document.getElementById('adivinar');
const agregar = document.getElementById('agregar');

const colores = ["azul", "rojo", "morado", "naranja", "amarillo", "cafe", "negro", "verde"];
const colors = ["blue", "red", "purple", "orange", "yellow", "brown", "black", "green"];
const animales = ["perro", "gato", "delfín"];
const numerosS = ["uno", "cero", "dos", "tres"];
const numeros = ["uno", 0, 2, 3];

function queAdivinar() {
    const aleatorioC = Math.floor(Math.random() * colores.length);
    const aleatorioA = Math.floor(Math.random() * animales.length);
    const aleatorioN = Math.floor(Math.random() * numeros.length);
    switch (adivinar.value) {
        case 'colores':
            agregar.innerHTML = `<p class="font-mono font-semibold text-xl">¿Que color es este? </p><div class="w-28 h-28 bg-${colors[aleatorioC]}"></div><input value="${colores[aleatorioC]}" class="sr-only" id="comparar">`;
            break;
        case 'animales':
            agregar.innerHTML = `<p class="font-mono font-semibold text-xl">¿Que animal es este?</p><img src="img/${animales[aleatorioA]}.png" class="w-28 h-28"></img><input value="${animales[aleatorioA]}" class="sr-only" id="comparar">`;
            break;
        case 'numeros':
            agregar.innerHTML = `<p class="font-mono font-semibold text-xl">¿Que numero es este?</p><img src="img/${numeros[aleatorioN]}.png" class="w-28 h-28"></img><input value="${numerosS[aleatorioN]}" class="sr-only" id="comparar">`;
            break;
    }
}

btnDecir.addEventListener('click', () => {
    const comparar = document.getElementById('comparar');
    if (texto.value.toLowerCase() == comparar.value) {
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto.value + 'es correcto'));
        respuesta.innerHTML = '<p>Respuesta correcta</p>';
    } else {
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto.value + 'es incorrecto'));
        respuesta.innerHTML = '<p>Respuesta incorrecta</p>';
    }
});