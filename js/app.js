/*================ ACORDEON ======================*/ 
$(".accordion-titulo").click(function(){
  var contenido=$(this).next(".accordion-content");
  if(contenido.css("display")=="none"){ //open		
    contenido.slideDown(250);//slideDown(): Muestra un elemento con un efecto de deslizamiento (acordeón).			
    $(this).addClass("open");
  }
  else{ //close		
    contenido.slideUp(250);// Oculta un elemento el efecto de deslizamiento (acordeón).
    $(this).removeClass("open");	
  }
t});
/*================ MENU RESPONVIVE ======================*/

$(document).ready(main);
var contador = 1;
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}


/**===========MENU RESPONSIVE 2=============== */
function cambiarClase(){
  let siteNav = document.getElementById('site-nav');
      siteNav.classList.toggle('site-nav-open');
  let menuOpen = document.getElementById('menu-toggle');
      menuOpen.classList.toggle('menu-open');    
      
}