/*===================================
-> CREANDO PLANES : @Christraining
=====================================*/
const planes=[
    {   imgPlan:'img/foto2.jpg' ,
        tipo: 'Move On',
        motivo: 'Para salud'
    },
    {   imgPlan:'img/foto2.jpg' ,
        tipo: 'Move On',
        motivo: 'Para deportistas'
    }];

const $sectionPlan= document.querySelector('.section-plan')

let planesArray = Object.entries(planes);
planesArray.forEach(element => {
    console.log(element[1])
    const $articlePlan = document.createElement('ARTICLE')
    const $figurePlan = document.createElement('FIGURE')
    const $divPlan = document.createElement('DIV')
    const $imgPlan = document.createElement('IMG')
    const $figcaptionPlan = document.createElement('FIGCAPTION')
    const $pPlan = document.createElement('P')

    $articlePlan.classList.add('article-plan')
    $figurePlan.classList.add('figure-plan')
    $divPlan.classList.add('contenedor__imagen')
    $imgPlan.setAttribute('src',element[1].imgPlan)
    $imgPlan.setAttribute('Alt','imagen Plan 1')
    $figcaptionPlan.classList.add('figure-plan__figcaption')
    $figcaptionPlan.textContent = element[1].tipo
    $pPlan.textContent = element[1].motivo

    $divPlan.appendChild($imgPlan)
    $figurePlan.appendChild($divPlan)
    $figurePlan.appendChild($figcaptionPlan)
    $articlePlan.appendChild($figurePlan)
    $articlePlan.appendChild($pPlan)
    $sectionPlan.appendChild($articlePlan)
});
