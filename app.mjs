import express from 'express'
import { connectDB } from './src/config/dbConfig.mjs'
import  router from './src/routes/superHeroRoutes.mjs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import expressLayouts from 'express-ejs-layouts';

const app=express()
const PORT=3500


// Simular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurar carpeta estática
app.use(express.static(join(__dirname, 'public')));

// Configurar directorio de vistas y motor de plantillas
app.set('views', join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Configurar express ejs Layout
app.use(expressLayouts)
app.set('layout', 'layout')

app.use(express.json())

connectDB()

app.use('/api', router)

app.use((req,res)=>{
    res.status(404).send({ mensaje:'Ruta no encontrada'})
})

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})