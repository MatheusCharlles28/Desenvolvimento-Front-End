import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: string[] = [
    'Algoritmos',
    'FrontEnd',
    'Banco de Dados'
  ];

  constructor(private router: Router) {}

  verDetalhes(): void {
    this.router.navigate(['/cursos/detalhe']);
  }
}