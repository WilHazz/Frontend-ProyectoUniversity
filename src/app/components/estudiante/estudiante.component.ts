import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';


@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService){}

  ngOnInit(): void {
    this.cargarEstudiante();
  }

  cargarEstudiante(): void{
    this.estudianteService.getEstudiantes().subscribe({
      next: (data) => this.estudiantes = data,
      error: (err) => console.error('Error al cargar estudiante', err)
    })

    
  }
}
