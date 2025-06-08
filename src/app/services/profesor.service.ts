import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
private apiUrl = 'https://localhost:44337/api/Profesores';

  constructor(private http: HttpClient) {}

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.apiUrl);
  }

  getProfesor(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.apiUrl}/${id}`);
  }

  createProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.apiUrl, profesor);
  }

  updateProfesor(id: number, profesor: Profesor): Observable<Profesor> {
    return this.http.put<Profesor>(`${this.apiUrl}/${id}`, profesor);
  }

  deleteProfesor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
