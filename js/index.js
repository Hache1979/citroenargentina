// CREACION DE TITULO CON JQUERY

$("div#title-province").append('<h4 class="title-type">SELECCIONE SU UBICACIÓN:</h4>');

// TOMA DE DATOS DEALERS CITROEN EN FORMATO JSON

let concesionarios

function callback(data) {
    if (data.length === 0) {
        alert("No hay datos");
    } else {
        
        concesionarios = data;
        
    }
}

$.ajax({
    type: "Get",
    url: "../json/concesionarios.json",
    dataType: "json",
    async: false,
    success: function(data) {
        
        callback(data)
    },
    error: function(){
    alert("json not found");
    }
})

// TOMAR PROVINCIAS DEL ARRAY

let concesionariosArr = [];


function CargarProvincias (){
    concesionarios.forEach((item) =>{
        if(!concesionariosArr.includes(item.provincia)){
            concesionariosArr.push(item.provincia)
        }
        concesionariosArr.sort()
    })
    }
CargarProvincias ()

// CARGAR PROVINCIAS DE ARRAY EN SELECT

let select1 = $('#select1')

function provinciasArray (){
    concesionariosArr.map(concesionario => select1.append(`<option>${concesionario}</option>`))
}
provinciasArray()

// ESCUCHA DE EVENTO AL SELECCIONAR PROVINCIA Y CONFIRMA DEALERS //

function cargarConcesionario (){
    $(function(){
        $("#select1").on("change", function(event){
            let provSeleccionada = event.target.value;
            
            
            let direcciones =  $("div#direcciones")
        
            let dirArr = concesionarios.filter(concesionario => concesionario.provincia === provSeleccionada)

            direcciones.empty()
            dirArr.map(concesionario => direcciones.append(`
                <section >
                    <h4 class = nombreDealer>${concesionario.nombre} </h4>
                    <p class = direccionDealer>${concesionario.direccion}</p>
                </section>
            `) )
        });
    })
}
cargarConcesionario()























