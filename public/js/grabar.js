const btnStartRecord = document.getElementById('btnStartRecord');
const texto = document.getElementById('texto');
const respuesta = document.getElementById('respuesta');
const adivinar = document.getElementById('adivinar');
const agregar = document.getElementById('agregar');

const colores = ["azul", "rojo", "morado", "naranja", "amarillo", "cafe", "negro", "verde"];
const colors = ["blue", "red", "purple", "orange", "yellow", "brown", "black", "green"];
const animales = ["perro", "gato", "delfín"];
const numeros = ["uno", 0, 2, 3];

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es';
recognition.continous = false;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value = frase;
    console.log(frase);
    const comparar = document.getElementById('comparar');
    switch (adivinar.value) {
        case 'colores':
            if (frase == comparar.value) {
                respuesta.innerHTML = '<p>Respuesta correcta</p>';
            } else {
                respuesta.innerHTML = '<p>Respuesta incorrecta</p>';
            }
            break;
        case 'animales':
            if (frase == comparar.value) {
                respuesta.innerHTML = '<p>Respuesta correcta</p>';
            } else {
                respuesta.innerHTML = '<p>Respuesta incorrecta</p>';
            }
            break;
        case 'numeros':
            if (frase == comparar.value) {
                respuesta.innerHTML = '<p>Respuesta correcta</p>';
            } else {
                respuesta.innerHTML = '<p>Respuesta incorrecta</p>';
            }
            break;
    }
}

btnStartRecord.addEventListener('click', () => {
    recognition.start();
});

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
            agregar.innerHTML = `<p class="font-mono font-semibold text-xl">¿Que numero es este?</p><img src="img/${numeros[aleatorioN]}.png" class="w-28 h-28"></img><input value="${numeros[aleatorioN]}" class="sr-only" id="comparar">`;
            break;
    }
}