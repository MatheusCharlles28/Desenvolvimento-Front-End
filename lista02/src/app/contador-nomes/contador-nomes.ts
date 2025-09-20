import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador-nomes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contador-nomes.html',
  styleUrls: ['./contador-nomes.css']
})
export class ContadorNomes {
  nomes: string[] = [];
  nomeAtual: string = '';

  adicionarNome(): void {
    if (this.nomeAtual.trim()) {
      this.nomes.push(this.nomeAtual.trim());
      this.nomeAtual = '';
    }
  }

  removerNome(index: number): void {
    this.nomes.splice(index, 1);
  }

  getTotalNomes(): number {
    return this.nomes.length;
  }

  limparLista(): void {
    this.nomes = [];
    this.nomeAtual = '';
  }
}