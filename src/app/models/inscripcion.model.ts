import { Estudiante } from "./estudiante.model";
import { Profesor } from "./profesor.model";
import { Materia } from "./materia.model";

export interface Inscripcion {
    id: number;
    estudianteId: number;
    profesorId: number;
    materiaId: number;
    semestre: string;
    fechaInscripcion: string;

    estudiante?: Estudiante;
    profesor?: Profesor;
    materia?: Materia;
}
