/**==============================================
 * VALIDANDO Y LIMPIANDO FORMULARIO
 ================================================*/
 function validarFormulario(){
    let nomForm = document.forms["formulario"]["nombre"].value;
        if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	    const $nombre = document.querySelector('#idMNombre')
        $nombre.classList.add('msj-formulario')
        mostrarMensaje($nombre)
        $nombre.innerHTML='El campo es obligatorio y solo texto'
        removeMensaje($nombre)
        document.querySelector("#nombre").focus();
        return false;
    }

    let apeForm = document.forms["formulario"]["apellido"].value;
        if ( apeForm == null || apeForm == "" || apeForm.length == 0  || /^\s+$/.test(apeForm) || !isNaN(apeForm) ) {
	    const $apellido = document.querySelector('#idMApellido')
        $apellido.classList.add('msj-formulario')
        mostrarMensaje($apellido)
        $apellido.innerHTML='El campo es obligatorio y solo texto'
        removeMensaje($apellido)
        document.querySelector("#apellido").focus();
	    return false;
    }

    let emailForm = document.forms["formulario"]["email"].value;
        if( emailForm== null || emailForm == "" || emailForm.length == 0 || (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(emailForm)) || !isNaN(emailForm)) {
        const $mail = document.querySelector('#idMEmail')
        $mail.classList.add('msj-formulario')
        mostrarMensaje($mail)
        $mail.innerHTML='El campo es obligatorio y solo texto'
        removeMensaje($mail)
        document.querySelector("#email").focus();
        return false;
    }

    let celularForm = document.forms["formulario"]["celular"].value;
        if( isNaN(celularForm) || celularForm == null || celularForm == "" || celularForm.length == 0 || /^\s+$/.test(celularForm)){
        const $celular = document.querySelector('#idMCelular')
        $celular.classList.add('msj-formulario')
        mostrarMensaje($celular)
        $celular.innerHTML='El campo es obligatorio y solo número'
        removeMensaje($celular)
        document.querySelector("#celular").focus();
	    return false;
    }
    
    let optEntrenamientoForm = document.forms["formulario"]["entrenamiento"].selectedIndex;
        if( optEntrenamientoForm == null || optEntrenamientoForm == 0 ) {
        const $entrenamiento = document.querySelector('#idMEntrenamiento')
        $entrenamiento.classList.add('msj-formulario')
        mostrarMensaje($entrenamiento)
        $entrenamiento.innerHTML='Es obligatorio elegir tipo de entrenamiento'
        removeMensaje($entrenamiento)
        document.querySelector("#entrenamiento").focus();
	    return false;					
    }

    let optModalidadForm = document.forms["formulario"]["modalidad"].selectedIndex;
        if( optModalidadForm == null || optModalidadForm == 0 ) {
	    const $modalidad = document.querySelector('#idMModalidad')
        mostrarMensaje($modalidad)
        $modalidad.classList.add('msj-formulario')
        $modalidad.innerHTML='Es obligatorio elegir modalidad'
        removeMensaje($modalidad)
        document.querySelector("#modalidad").focus();
        return false;					
    }

    let optFrecuenciaForm = document.forms["formulario"]["frecuencia"].selectedIndex;
        if( optFrecuenciaForm == null || optFrecuenciaForm == 0 ) {
        const $frecuencia = document.querySelector('#idMFrecuencia')
        $frecuencia.classList.add('msj-formulario')
        mostrarMensaje($frecuencia)
        $frecuencia.innerHTML='Es obligatorio elegir frecuencia'
        removeMensaje($frecuencia)
        document.querySelector("#frecuencia").focus();
	    return false;					
    }
}

window.addEventListener('pageshow', function() {
    document.querySelector(".formulario").reset();
});

function removeMensaje(mensaje){
    setTimeout(() => {
        mensaje.innerHTML=""
        mensaje.style='display:none'     
    }, 3000);
}
function mostrarMensaje(mensaje){
    mensaje.style='display:block'
}