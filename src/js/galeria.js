document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId =  i;
        
        //Añadir la fincion de mostrar imagen
        imagen.onclick = MostrarImagen;
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}



function MostrarImagen(e){
    const id = parseInt( e.target.dataset.imagenId );
    const imagen = document.createElement('IMG');
    
     //generar imagen
      
      imagen.src = `build/img/grande/${id}.webp`;
 
      const overlay = document.createElement('DIV');
      overlay.appendChild(imagen);
      overlay.classList.add('overlay');
    // mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    //boton para cerrar imagen

    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

    //cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        location.reload();
    }

    //cuando se da click, cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
        location.reload();
    }
    
 }

 