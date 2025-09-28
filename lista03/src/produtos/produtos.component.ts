import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos: string[] = [
    'Notebook',
    'Celular',
    'Fone de Ouvido'
  ];

  constructor(private router: Router) {}

  verDetalhes(): void {
    this.router.navigate(['/produto']);
  }
}