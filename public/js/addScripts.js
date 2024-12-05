
window.addEventListener("load", () => {

    const btnCrearSuperheroe = document.getElementById('btnCrearSuperheroe')
    const formAgregar = document.getElementById('formAgregar')
  
    btnCrearSuperheroe.addEventListener('click', async (event) => {
      event.preventDefault()
     
      if (!formAgregar.checkValidity()) { //habilitra la validacion del formulario
        formAgregar.reportValidity();
        return;
    }
      const superheroe = {        
        nombreSuperheroe: formAgregar.nombreSuperheroe.value,
        nombreReal: formAgregar.nombreReal.value,
        edad: formAgregar.edad.value,
        planetaOrigen: formAgregar.planetaOrigen.value,
        debilidad: formAgregar.debilidad.value,
        poderes: formAgregar.poderes.value.split(',').map(p => p.trim()),
        aliados: formAgregar.aliados.value.split(',').map(a => a.trim()),
        enemigos: formAgregar.enemigos.value.split(',').map(e => e.trim()),
    };
      
    try {
      const response = await fetch('/api/heroes/nuevoheroe', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(superheroe),
      });

      if (response.ok) {
        const superheroeCreado = await response.json();        
       
          //alert('Superhéroe creado con éxito: ' + superheroeCreado.Nombre);          
          window.location.href = `/api/heroes`
      } else {
          const error = await response.json();
          alert('Error al crear el superhéroe: ' + error.message);
      }
  } catch (error) {
      console.error('Error en la solicitud:', error);
  }
});
       
    })
