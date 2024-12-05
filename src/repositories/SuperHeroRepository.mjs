import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        try {
            return await SuperHero.findById(id)

        } catch (error) {
            console.error(`se produjo un error: ${error} `)
        }
    }

    async obtenerTodos() {
        return await SuperHero.find({})
    }

    async buscarPorAtributo(atributo, valor) {
        //const query = { [atributo]: new RegExp(valor, 'i') }
        if (!isNaN(valor)) {
            const query = { [atributo]: valor }
            return await SuperHero.find(query)
        }
        else {
            const query = { [atributo]: new RegExp(valor, 'i') }
            return await SuperHero.find(query)
        }
    }

    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', $expr: { $gte: [{ $size: "$poderes" }, 2] } })
    }


    async agregarHeroe(datos) {        
        const nuevoHeroe= await SuperHero.create(datos)        
        return nuevoHeroe
    }

    async actualizarHeroe(id, datos) {  
        
        try {   
            const heroe= await SuperHero.findByIdAndUpdate( id, { $set:datos }, { new : true , upsert: true})                        
            return heroe
            
        } catch (error) {
            throw('se produjo un error al intentar actualizar: ',error)
        }          
    }

    async borrarHeroe(id) {        
        const heroe= await SuperHero.findByIdAndDelete( id)        
        return heroe
    }
    
    async borrarPorNombre(name) {        
        const heroe= await SuperHero.deleteOne( { nombreSuperheroe : name })   
        return heroe
    }

}
export default new SuperHeroRepository()