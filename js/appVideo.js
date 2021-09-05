/*=================
 -> SLIDER VIDEO
 ==================*/
 function cargarVideo(url){
	document.getElementById('sliderVideo').src=url;
}
/*================
-> ARREGLOS:
==================*/
const videos = ['https://res.cloudinary.com/juanjoh/video/upload/v1629124105/Christraining/video1_thmzo3.mp4',
                'https://res.cloudinary.com/juanjoh/video/upload/v1629124441/Christraining/video2_cbvzvd.mp4',
                'https://res.cloudinary.com/juanjoh/video/upload/v1629124491/Christraining/video3_rfxaki.mp4']
const imagenes = ['img/imagen1.JPG','img/imagen2.JPG','img/imagen3.JPG']

const $slider = document.querySelector('#slider')
const $ul = document.createElement('UL')
$ul.classList.add('navegacion')
$ul.id ='navegacion'

/*================
-> BUCLE:
==================*/
imagenes.forEach(function(e){ 
    // console.log(e)
    const imagen = e
    const $li = document.createElement('LI') 
    const $img = document.createElement('IMG')
    
    $li.dataset.id=e
    $img.setAttribute('src',imagen)
   
    $slider.appendChild($ul)
    $ul.appendChild($li)
    $li.appendChild($img)
})

/*===================================
-> INCLUIR UN CLICK A ELEMENTO 'LI':
=====================================*/
const ul = document.querySelector('#navegacion'); 
const $sliderVideo = document.querySelector('#sliderVideo') 
ul.addEventListener('click', function (event){
    // console.log(event.target)
    var target = event.target; 
    while (target && target.parentNode !== ul){
        target = target.parentNode; 
        if(!target){ 
            return; 
        } 
    }
    if (target.tagName === 'LI'){
        // console.log(target.dataset.id)
        const $id = target.dataset.id
        if($id === 'img/imagen1.JPG'){
            cargarVideo(videos[0])
        }
        else if($id === 'img/imagen2.JPG'){
            cargarVideo(videos[1])
        }
        else if($id === 'img/imagen3.JPG'){
            cargarVideo(videos[2])
        }
        else{
            console.log('no cambio')
        }
    }
});