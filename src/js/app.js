document.addEventListener('DOMContentLoaded', function(){
    ScrollNav();

    NavegacionFija();
});

function NavegacionFija(){

    const barra = document.querySelector('.header');

    //Registrar el Intersection observer
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo')
           
        }else{
           barra.classList.add('fijo')
        }
    });

    //Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}

function ScrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-princial a');
   
    enlaces.forEach( function( enlace ){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
         });
     });
    console.log(enlaces);
    
}