import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  manchetes: string[] = [
    'Angular 18 lançado',
    'TypeScript ganha nova versão',
    'Front-end em alta no mercado'
  ];

  constructor(private router: Router) {}

  lerMais(): void {
    this.router.navigate(['/detalhe-noticia']);
  }
}