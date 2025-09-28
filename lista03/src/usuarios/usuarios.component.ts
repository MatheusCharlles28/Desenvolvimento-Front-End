import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: string[] = ['João', 'Maria', 'Pedro'];

  constructor(private router: Router) {}

  verDetalhes(): void {
    this.router.navigate(['/dashboard/usuarios/detalhe']);
  }
}