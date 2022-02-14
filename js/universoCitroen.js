// MODIFICACION SOBRE DOM USANDO QUERYSELECTOR //

let newh2 = document.querySelector("h2").textContent = "¿ESTAS LISTO PARA TU NUEVO CITROËN C3?"

let newp = document.querySelector("p").textContent = `Dejate llevar por su originalidad y descubrí también la tuya gracias a su singular diseño. Único por donde lo mires. Su carrocería bitono, su actitud SUV y cada uno de sus detalles lo hacen atractivo e irresistible.`


// MODIFICACION SOBRE DOM USANDO SELECTOR ALL Y FOR //

let parrafos = document.querySelectorAll('p');
let newParrafo = `El modelo ofrece un amplio espacio interior, que lo hace un vehículo versátil. Sus ocupantes estarán siempre confortables, además de contar con varios porta-objetos para sus pertenencias. Su panel horizontal transmite una grata sensación de espacio, haciendo de la vida a bordo, una experiencia agradable.`

function cambiosSobreParrafos(a,b,c){
for (let i = 0; i < a.length; i++){
    a[c].innerText = b
}
}
cambiosSobreParrafos(parrafos, newParrafo, 3)

////////////////////////////////////////////////

let h2s = document.querySelectorAll('h2');
let newh2s = `INCREIBLE DESDE CUALQUIER ANGULO`

function cambiosSobreHeadings (a,b,c){
for (let i = 0; i < a.length; i++){
    a[c].innerText = b
}
}
cambiosSobreHeadings(h2s, newh2s, 1)

////////////////////////////////////////////////


