
window.addEventListener("load", () => {

    const btnEditarSuperheroe = document.getElementById('btnEditarSuperheroe')
    const formEditar = document.getElementById('formEditar')

    btnEditarSuperheroe.addEventListener('click', async (event) => {
        event.preventDefault()

        if (!formEditar.checkValidity()) { //habilitra la validacion del formulario
            formEditar.reportValidity();
            return;
        }

        const superheroe = {
            nombreSuperheroe: formEditar.nombreSuperheroe.value,
            nombreReal: formEditar.nombreReal.value,
            edad: formEditar.edad.value,
            planetaOrigen: formEditar.planetaOrigen.value,
            debilidad: formEditar.debilidad.value,
            poderes: formEditar.poderes.value.split(',').map(p => p.trim()),
            aliados: formEditar.aliados.value.split(',').map(a => a.trim()),
            enemigos: formEditar.enemigos.value.split(',').map(e => e.trim()),
        };

        try {
            //const response = await fetch('/api/heroes/:id/editar', {
            const response = await fetch(`/api/heroes/actualizar/${formEditar.id.value}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(superheroe),
            });

            if (response.ok) {
                const superheroeActualizado = await response.json();

                // alert('Superhéroe actualizado con éxito: ' + superheroeActualizado.Nombre);
                window.location.href = `/api/heroes`  //redirige al dashboard
            } else {
                const error = await response.json();
                alert('Error al editar el superhéroe: ' + error.message);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }




    });

})
