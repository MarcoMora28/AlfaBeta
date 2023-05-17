const mascaracteres=[241,209,161,33,191,63,35,36,43,45]

$('.js-campo').on('keypress', (e) => {
  //Obtenemos el código ASCII de la tecla pulsada
  let teclaPulsada = e.charCode;
  
  //Validamos el rango en el que se encuentran los caracteres No permitidos
  if (teclaPulsada > 96 && teclaPulsada < 123 || teclaPulsada > 64 && teclaPulsada < 91 || teclaPulsada > 47 && teclaPulsada < 58 || mascaracteres.includes(teclaPulsada) ) {
    return true;
  } else {
    return false;
  }
});