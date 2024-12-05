export function renderizarSuperheroe(superHeroe) {
    return {
        Nombre: superHeroe.nombreSuperheroe,
        'Nombre Real': superHeroe.nombreReal,
        edad: superHeroe.edad,
        'Planeta de Origen': superHeroe.planetaOrigen,
        Debilidad: superHeroe.debilidad,
        Poderes: superHeroe.poderes,
        Aliados: superHeroe.aliados,
        Enemigos: superHeroe.enemigos
    }

}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe))
}