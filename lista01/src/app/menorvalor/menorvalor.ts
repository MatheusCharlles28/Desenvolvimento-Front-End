import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menorvalor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './menorvalor.html',
  styleUrls: ['./menorvalor.css']
})
export class MenorValorComponent {
  numero1: number = 0;
  numero2: number = 0;
  menorValor: number = 0;
  mensagemResultado: string = '';
  resultadoCalculado: boolean = false;

  calcularMenorValor(): void {
    if (this.numero1 < this.numero2) {
      this.menorValor = this.numero1;
      this.mensagemResultado = 'O primeiro número é menor: ' + this.menorValor;
    } else if (this.numero2 < this.numero1) {
      this.menorValor = this.numero2;
      this.mensagemResultado = 'O segundo número é menor: ' + this.menorValor;
    } else {
      this.menorValor = this.numero1; 
      this.mensagemResultado = 'Os números são iguais:';
    }
    
    this.resultadoCalculado = true;
  }
}