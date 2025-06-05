import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService){}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void{
    this.estudianteService.getEstudiantes().subscribe({
      next: (data) => this.estudiantes = data,
      error: (err) => console.error('Error al cargar estudiante', err)
    })
  }

    eliminarEstudiante(id: number): void{
      if(confirm('Esta seguro de eliminar este estudiante')) {
        this.estudianteService.deleteEstudiante(id).subscribe(() => {
          this.cargarEstudiantes();
        })
      }
    }
  
}
