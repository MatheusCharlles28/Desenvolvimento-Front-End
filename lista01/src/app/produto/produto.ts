import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produto.html',
  styleUrls: ['./produto.css']
})
export class ProdutoComponent {
  codigo: string = '';
  nomeProduto: string = '';
  resultadoCalculado: boolean = false;

  buscarProduto(): void {
    if (this.codigo === '001') {
      this.nomeProduto = 'Parafuso';
    } else if (this.codigo === '002') {
      this.nomeProduto = 'Porca';
    } else if (this.codigo === '003') {
      this.nomeProduto = 'Prego';
    } else {
      this.nomeProduto = 'Diversos';
    }
    
    this.resultadoCalculado = true;
  }
}