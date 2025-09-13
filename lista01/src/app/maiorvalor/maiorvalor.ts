import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maiorvalor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './maiorvalor.html',
  styleUrls: ['./maiorvalor.css']
})
export class MaiorValorComponent {
  numero1: number = 0;
  numero2: number = 0;
  maiorValor: number = 0;
  mensagemResultado: string = '';
  resultadoCalculado: boolean = false;

  calcularMaiorValor(): void {
    if (this.numero1 > this.numero2) {
      this.maiorValor = this.numero1;
      this.mensagemResultado = 'O primeiro número é maior: ' + this.maiorValor;
    } else if (this.numero2 > this.numero1) {
      this.maiorValor = this.numero2;
      this.mensagemResultado = 'O segundo número é maior: ' + this.maiorValor;
    } else {
      this.maiorValor = this.numero1; 
      this.mensagemResultado = 'Os números são iguais!';
    }
    
    this.resultadoCalculado = true;
  }
}