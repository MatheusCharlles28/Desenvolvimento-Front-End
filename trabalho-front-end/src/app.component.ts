import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="menu">
      <a routerLink="/" routerLinkActive="ativo" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="/receitas" routerLinkActive="ativo">Receitas</a>
      <a routerLink="/despesas" routerLinkActive="ativo">Despesas</a>
      <a routerLink="/lista" routerLinkActive="ativo">Lista</a>
      <a routerLink="/relatorios" routerLinkActive="ativo">Relatórios</a>
    </nav>

    <main class="conteudo">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .menu {
      background: #333;
      padding: 10px;
      display: flex;
      gap: 15px;
    }

    .menu a {
      color: #fff;
      text-decoration: none;
    }

    .menu a.ativo {
      font-weight: bold;
      text-decoration: underline;
    }

    .conteudo {
      padding: 20px;
    }
  `]
})
export class AppComponent {}
