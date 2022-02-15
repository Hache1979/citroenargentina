// INGRESO DE DATOS EN FORMULARIO DE CONTACTO Y MENSAJE DE ENVIO EXITOSO DE CONSULTA//

let datosContacto = [];

const reloadTab = () =>{
    location.reload();
}

$(function(){
    $('#contact').submit(function (event) {
        event.preventDefault();
        let nombre = $('#name').val();
        let mail = $('#mail').val();
        let telefono = $('#tel').val();
        let msj = $('#msj').val();

        datosContacto.push(nombre, mail,telefono, msj)
        
    });   

    $('#contact').submit(function (event){
    event.preventDefault();
        $('#contact').fadeOut();
        $('.footer_1').fadeOut();
        $('.message').css("display", "block");
        setTimeout(reloadTab, 3000);
    });

    $('.message').css("display", "none");  

});

$("main").append('<p class="message">SU CONSULTA FUE ENVIADA EXITOSAMENTE!</p>');

