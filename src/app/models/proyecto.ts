import { Vista } from "./vista";

export class Proyecto {
    tipo: string = "";
    link: string = "";
    lengua: string = "";
    nombre: string = "";
    descripcion: string = "";
    imagen: string = "";
    tecnologias: Array<string> = [];
    vistas: Array<Vista> = [];
}

