import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compras.html',
  styleUrls: ['./lista-compras.css']
})
export class ListaCompras {
  produtos: Produto[] = [];
  nomeProduto: string = '';
  precoProduto: number | null = null;

  adicionarProduto(): void {
    if (this.nomeProduto.trim() && this.precoProduto !== null && this.precoProduto > 0) {
      this.produtos.push({
        nome: this.nomeProduto.trim(),
        preco: this.precoProduto
      });
      this.nomeProduto = '';
      this.precoProduto = null;
    }
  }

  removerProduto(index: number): void {
    this.produtos.splice(index, 1);
  }

  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }

  limparLista(): void {
    this.produtos = [];
    this.nomeProduto = '';
    this.precoProduto = null;
  }
}