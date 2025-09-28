import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {
  constructor(private router: Router) {}

  navegarPara(rota: string): void {
    this.router.navigate([rota]);
  }
}