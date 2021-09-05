// const d = document;

// export default function searchFilter(input,selector){
//     d.addEventListener("keyup",(e)=>{
//         if(e.target.matches(input)){
//             // console.log(e.key);
//              console.log(e.target.value);
//             d.querySelectorAll(selector).forEach((el)=>
//                 el.textContent.toLowerCase().includes(e.target.value)
//                 ?el.classList.remove("filtro")
//                 :el.classList.add("filtro")
//             );
//         }
//     });
// }


$(document).ready(function(){
    var busqueda = $('#busqueda'),
    titulo = $('main section h2');
    $(titulo).each(function(){
        var section = $(this);
        //si presionamos la tecla
        $(busqueda).keyup(function(){
            //cambiamos a minusculas
            this.value = this.value.toLowerCase();
            //
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