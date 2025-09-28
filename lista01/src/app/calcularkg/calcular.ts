import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calcular.html',
  styleUrls: ['./calcular.css'], 
})
export class CalcularComponent {
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;

  calcularPreco() { 
    const n1 = Number(this.numero1) || 0;
    const n2 = Number(this.numero2) || 0;
    this.resultado = n2 * n1; 
  }
}