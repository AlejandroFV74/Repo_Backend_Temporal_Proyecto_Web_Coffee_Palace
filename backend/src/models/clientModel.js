
import { Schema, model } from 'mongoose';

const clienteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Asegura que el correo sea único
    trim: true,
    lowercase: true,
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
  },
  direccion: {
    calle: {
      type: String,
      required: true,
      trim: true,
    },
    ciudad: {
      type: String,
      required: true,
      trim: true,
    },
    codigoPostal: {
      type: String,
      required: true,
      trim: true,
    },
  },
  fechaRegistro: {
    type: Date,
    default: Date.now, // Se asigna la fecha actual por defecto
  },
});

// Crea el modelo
//const Cliente = mongoose.model('Cliente', clienteSchema);

const Client = model('Cliente', clienteSchema);

export { Client };
