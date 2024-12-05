import SuperheroeRepository from "../repositories/SuperHeroRepository.mjs";

const repository = SuperheroeRepository

export function obtenerSuperheroePorId(id) {
    const superheroe = repository.obtenerPorId(id)
    return superheroe
}

export function obtenerTodoslosSuperheroes() {
    const superheroes = repository.obtenerTodos()
    return superheroes
}


export async function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = await repository.buscarPorAtributo(atributo, valor)
    return superheroes

}

export async function obtenerSuperheroesMayoresDe30() {
    const superheroes = await repository.obtenerMayoresDe30()
    return superheroes
}


export async function agregarHeroe(datos) {
    const superheroes = await repository.agregarHeroe(datos)
    return superheroes
}


export async function actualizarHeroe(id, datos) {    
    const superheroes = await repository.actualizarHeroe(id, datos)
    return superheroes
}

export async function borrarHeroe(id) {
    const superheroes = await repository.borrarHeroe(id)
    return superheroes
}

export async function borrarPorNombre(name) {
    const superheroes = await repository.borrarPorNombre(name)
    return superheroes
}