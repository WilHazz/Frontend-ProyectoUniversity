import { Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';


export const routes: Routes = [
    {path: 'estudiantes', component: EstudianteComponent},
    {path: '', redirectTo: 'estudiantes', pathMatch: 'full'}
];
