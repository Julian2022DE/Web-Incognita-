'use strict';

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

// Cuando hago click en cada punto
// saber la posicion de ese punto
// aplicar un transform translateX al grande 
// Quitar la clase activo a Todos los puntos
// Añadir la clase activo al punto que hacemos click


//recorrer todos los puntos
punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i;
        //posicion es 0 transformx es 0
        //posicion es 1 transformx es -50%
        //operacion = posicion x scala de img

        let operacion = posicion * -50;

        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo');
        });

        punto[i].classList.add('activo');
    });
});
