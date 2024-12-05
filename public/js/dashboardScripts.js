window.addEventListener("load", () => {



    // Obtener solo inputs de tipo button editar

    const inputsButtonEditar = document.querySelectorAll('.button-editar');
    const inputsButtonEliminar = document.querySelectorAll('.button-eliminar');
    const inputButtonAgregar = document.querySelector('.button-agregar');

    inputsButtonEditar.forEach(input => {
        input.addEventListener('click', () => {
            //alert(input.id)
            let heroe = {}

            fetch(`/api/heroes/id/${input.value}`)
                .then(response => response.json())
                .then(response => heroe = JSON.stringify(response))
                //  .then(response => console.log(heroe))
                .then(response => window.location.href = `heroes/editar?id=${input.value}&heroe=${heroe}`)

                .catch(error => {
                    console.error('Error:', error);
                });
        })
    });

    //// boton Eliminar
    inputsButtonEliminar.forEach(input => {

        input.addEventListener('click', () => {            
            const respuesta = confirm('esta seguro que quiere eliminar al superheroe')
            if (respuesta) {
                let heroe = {}

                fetch(`/api/heroes/borrar/${input.value}`, { method: 'DELETE' })
                    .then(response => response.json())
                    .then(response => heroe = JSON.stringify(response))
                    .then(response => {
                        //alert(`se elimino correctamente a ${response.Nombre}`)
                        location.reload();
                    })

                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        })
    });
    ////////// boton agregar
    inputButtonAgregar.addEventListener('click', () => {
        window.location.href = `heroes/agregar`
    })
})
