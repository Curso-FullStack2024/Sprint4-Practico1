import {
    obtenerSuperheroePorId, obtenerTodoslosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30,
    agregarHeroe, actualizarHeroe, borrarHeroe, borrarPorNombre
} from '../services/superHeroServices.mjs'
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs'

export async function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params
    const superheroe = await obtenerSuperheroePorId(id)

    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send({ mensaje: 'Superheroe no encontrado' })
    }

}

export async function obtenerTodoslosSuperheroesController(req, res) {
    const superheroes = await obtenerTodoslosSuperheroes()
    //res.send(renderizarListaSuperheroes(superheroes))
    res.render('dashboard', { superheroes })
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor)

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes))
    } else {
        res.status(404).send({ mensaje: 'No se encontraron superheroes con ese atributo' })

    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = await obtenerSuperheroesMayoresDe30()
    res.send(renderizarListaSuperheroes(superheroes))
}


export async function agregarHeroeController(req, res) {    
    const superheroe = await agregarHeroe(req.body)
    res.send(renderizarSuperheroe(superheroe))
 
}


export async function actualizarHeroeController(req, res) {

  try {
      const superheroe = await actualizarHeroe(req.params.id, req.body)
      res.send(renderizarSuperheroe(superheroe))
    
  } catch (error) {
    console.error('se produjo un error', error)
  }
}


export async function borrarHeroeController(req, res) {
    const superheroe = await borrarHeroe(req.params.id)
    res.send(renderizarSuperheroe(superheroe))
}


export async function borrarPorNombreController(req, res) {
    const superheroe = await borrarPorNombre(req.params.name)
    res.send(renderizarSuperheroe(superheroe))
}


// muestra el formulario de carga
export async function agregarController(req, res) { 
    res.render('addSuperhero')
}

export async function editarController(req, res) { 
    const { heroe , id}= req.query  
    res.render('editSuperhero', { heroe: JSON.parse(heroe), id })
    
}

export async function editarHeroeController(req, res) { 
    res.render('editSuperhero')
}
