import express from "express";

import {
     obtenerSuperheroePorIdController, obtenerTodoslosSuperheroesController, buscarSuperheroesPorAtributoController,
     obtenerSuperheroesMayoresDe30Controller, agregarHeroeController, actualizarHeroeController, borrarHeroeController, 
     borrarPorNombreController, agregarController, editarController, editarHeroeController
} from '../controllers/superheroesController.mjs'
import { heroeValidation } from '../validators/heroeValidator.mjs'
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router()

router.get('/', (req, res)=>{ res.render('home',{'title':'pagina principal'} )})
router.get('/heroes', obtenerTodoslosSuperheroesController)
router.get('/heroes/id/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/mayoresDe30/', obtenerSuperheroesMayoresDe30Controller)
router.get('/heroes/agregar/', agregarController) // muestra el formulario
router.get('/heroes/editar/', editarController) // muestra el formulario

router.post('/heroes/nuevoheroe/', heroeValidation(), handleValidationErrors, agregarHeroeController)
router.put('/heroes/actualizar/:id', heroeValidation(), handleValidationErrors, actualizarHeroeController)
router.put('/heroes/:id/editar', editarHeroeController) // envia al servidor
router.delete('/heroes/borrar/:id', borrarHeroeController)
router.delete('/heroes/borrarpornombre/:name', borrarPorNombreController)

export default router;