import mongoose from 'mongoose'

export async function connectDB() {
    try {

        mongoose.connect('mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js', { serverSelectionTimeoutMS: 5000 })
        console.log('Conexion exitosa a MongoDB');
    }
    catch (error) {
        console.error('error al conectar a MongoDB', error)
        process.exit(1)
    }
}