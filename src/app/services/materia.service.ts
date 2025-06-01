import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private apiUrl = 'https://localhost:44337/api/Materias';

  constructor(private http:HttpClient) { }

  getMaterias(): Observable<Materia []>{
    return this.http.get<Materia []>(this.apiUrl);
  }

  getMateria(id: number): Observable<Materia>{
    return this.http.get<Materia>(`${this.apiUrl}/${id}`)
  }

  createMateria(materia: Materia): Observable<Materia>{
    return this.http.post<Materia>(this.apiUrl, materia);
  }

  updateMateria(id: number, materia: Materia): Observable<Materia>{
    return this.http.put<Materia>(`${this.apiUrl}/${id}`, materia)

  }
  deleteMateria(id: number): Observable<any>{

    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
