import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'https://localhost:44337/api/Estudiantes';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante []>{
    return this.http.get<Estudiante []>(this.apiUrl);
  }

  getEstudiante(id:number): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${this.apiUrl}/${id}`);
  }

  createEstudiante(estudiante: Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(this.apiUrl, estudiante);
  }
  updateEstudiante(id: number, estudiante: Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(this.apiUrl, estudiante);
  }
  deleteEstudiante(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
