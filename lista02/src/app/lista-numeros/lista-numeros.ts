import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-numeros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-numeros.html',
  styleUrls: ['./lista-numeros.css']
})
export class ListaNumeros {
  numeros: number[] = [];
  numeroAtual: number | null = null;

  adicionarNumero(): void {
    if (this.numeroAtual !== null && this.numeroAtual !== undefined) {
      this.numeros.push(this.numeroAtual);
      this.numeroAtual = null; 
    }
  }

  removerNumero(index: number): void {
    this.numeros.splice(index, 1);
  }

  calcularSoma(): number {
    return this.numeros.reduce((soma, numero) => soma + numero, 0);
  }

  calcularMedia(): number {
    if (this.numeros.length === 0) return 0;
    return this.calcularSoma() / this.numeros.length;
  }

  limparLista(): void {
    this.numeros = [];
    this.numeroAtual = null;
  }
}