$(document).ready(function(){
    var busqueda = $('#busqueda'),
    titulo = $('main section h2');
    $(titulo).each(function(){
        var section = $(this);
        //si presionamos la tecla
        $(busqueda).keyup(function(){
            //cambiamos a minusculas
            this.value = this.value.toLowerCase();
            //seleccionando clases con elemento 'i'
            var clase = $('.search i');
            if($(busqueda).val() != ''){
                $(clase).attr('class', 'bx bx-x');
            }else{
                $(clase).attr('class', 'bx bx-search');
            }
            if($(clase).hasClass('bx bx-x')){
                $(clase).click(function(){
                    //borramos el contenido del input
                    $(busqueda).val('');
                    //mostramos todas las listas
                    $(section).parent().show();
                    //volvemos a añadir la clase para mostrar la lupa
                    $(clase).attr('class', 'bx bx-search');
                });
            }
            //ocultamos toda la lista
            $(section).parent().hide();
            //valor del h3
            var txt = $(this).val();
            //si hay coincidencias en la búsqueda cambiando a minusculas
            if($(section).text().toLowerCase().indexOf(txt) > -1){
                //mostramos las listas que coincidan
                $(section).parent().show();
            }
        });
    });
});

const $input = document.querySelector('#busqueda')
const $lupa = document.querySelector('#lupa')
const $search = document.querySelector('.search')
const $cerrarLupa = document.querySelector('#cerrarLupa')

$lupa.addEventListener('click',function(e){
    console.log(e.target);
    contador = 1;
    if(contador == 1){
        $input.style='visibility:visible;width:100%;transition:all .6s;outline: unset;border-radius:10px'
        $lupa.style='right: 40px; color:#757575; text-shadow:none; top:5px'
        $cerrarLupa.style='visibility:visible'
        contador = 0
    }else{
        contador = 1
    }
})

$cerrarLupa.addEventListener('click',function(){
    if(contador == 0){
        $input.style='visibility:hidden; transition:all .1s'
        $input.innerHTML=''
        $cerrarLupa.style='visibility:hidden'
        $lupa.style='right:0'
        $lupa.setAttribute('class','bx bx-search')
        contador = 1
    }
    else{
        contador = 0
    }
})
