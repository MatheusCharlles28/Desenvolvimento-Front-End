import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './impar.html',
  styleUrls: ['./impar.css']
})
export class ImparComponent {
  numero: number = 0;
  mensagemResultado: string = '';
  tipoNumero: string = '';
  resultadoCalculado: boolean = false;

  verificarImpar(): void {
    if (this.numero % 2 === 0) {
      this.mensagemResultado = `O número ${this.numero} é PAR`;
      this.tipoNumero = 'par';
    } else {
      this.mensagemResultado = `O número ${this.numero} é ÍMPAR`;
      this.tipoNumero = 'impar';
    }
    
    this.resultadoCalculado = true;
  }
}