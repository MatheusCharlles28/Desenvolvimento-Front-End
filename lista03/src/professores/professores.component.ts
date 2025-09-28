import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
  professores: string[] = [
    'Prof. Carlos Silva',
    'Prof. Ana Santos',
    'Prof. Roberto Lima'
  ];

  constructor(private router: Router) {}

  verDetalhes(): void {
    this.router.navigate(['/professores/detalhe']);
  }
}