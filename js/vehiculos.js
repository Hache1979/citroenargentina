let p = document.createElement('p');

p.innerHTML = `Sus 3 asientos traseros independientes, corredizos, reclinables y rebatibles hacen del C5 Aircross el SUV más modulable y habitable de su segmento. Su volumen de baúl, varía de 580 L a 720 L, siendo la referencia en su segmento. Incorpora además, 14 tecnologías de ayuda a la conducción y 3 tecnologías de conectividad, es un SUV de nueva generación.`

const $contenedor = document.getElementById("contenedor");

$contenedor.append(p);


// APLICACION JQUERY //

jQuery('div#contenedor').empty();

$('#contenedor').append('<div id="contenedor">Sus 3 asientos traseros independientes, corredizos, reclinables y rebatibles hacen del C5 Aircross el SUV más modulable y habitable de su segmento. Su volumen de baúl, varía de 580 L a 720 L, siendo la referencia en su segmento. Incorpora además, 14 tecnologías de ayuda a la conducción y 3 tecnologías de conectividad, es un SUV de nueva generación.</div>');

jQuery('h2.testJquery').empty();

$('.testJquery').append('<h2 class="testJquery">BIENVENIDO A LA NUEVA GENERACIÓN CITROËN</h2>')