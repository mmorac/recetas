import { ingrediente } from "./ingrediente";

export interface receta {
    nombre: string;
    autor: string;
    ingredientes: ingrediente[];
    preparacion: string;
  }