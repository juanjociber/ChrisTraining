
/*=====================================
-> CARRUSEL: SIGUENOS EN CHRISTRAINING
=======================================*/
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // Pantallas >= 775px
			  breakpoint: 450,
			  settings: {
				// Ajusta el elemento a la ventana gráfica
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // Pantallas >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});