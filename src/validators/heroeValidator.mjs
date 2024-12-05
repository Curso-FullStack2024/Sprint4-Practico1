import { body } from 'express-validator'

export const heroeValidation = () => [
    body('nombreSuperheroe').notEmpty().withMessage('el nombre del superheroe es requerido').trim().isLength({ min: 3, max: 60 }).withMessage('El nombre del superheroe debe tener como mínimo 3 caracteres y máximo 60'),
    body('nombreReal').notEmpty().withMessage('el nombre real es requerido').trim().isLength({ min: 3 }).withMessage('El nombre real debe tener como mínimo 3 caracteres').isLength({ max: 60 }).withMessage('El nombre real debe tener como máximo 60 caracteres'),
    body('edad').notEmpty().withMessage('la edad es requerida').trim().isInt({ min: 0 }).withMessage('la edad debe ser mayor o igual a 0'),
    body('poderes').notEmpty().withMessage('poder es requerido').isArray({ min: 1 }).withMessage('debe ingresar un array de al menos un poder'),
    body('poderes.*').notEmpty().withMessage('debe indicar al menos un poder').isLength({ min: 3, max: 60 }).withMessage('el poder debe tener como minimo 3 caracteres y maximo 60').isString().withMessage('el poder debe ser un string').trim()
]