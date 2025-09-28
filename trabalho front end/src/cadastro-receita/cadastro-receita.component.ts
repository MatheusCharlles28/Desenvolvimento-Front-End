import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FinancasService, Registro  } from './../lista/financas.service';

@Component({
  selector: 'app-cadastro-receita',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-receita.component.html',
  styleUrls: ['./cadastro-receita.component.css'],
})
export class CadastroReceitaComponent {
  descricao: string = '';
  valor: number | null = null;
  categoria: string = '';
  
  
  categoriasSugeridas: string[] = [
    'salário',
    'freelance',
    'investimentos',
    'outros',
  ];

  constructor(private financasService: FinancasService) {}

  
  get receitas(): Registro[] {
    return this.financasService.getReceitas();
  }

  adicionarReceita(): void {
    
    if (!this.descricao.trim()) {
      alert('Por favor, informe a descrição da receita.');
      return;
    }
    
    if (!this.valor || this.valor <= 0) {
      alert('Por favor, informe um valor válido maior que zero.');
      return;
    }
    
    if (!this.categoria) {
      alert('Por favor, selecione uma categoria.');
      return;
    }

    
    this.financasService.adicionar({
      descricao: this.descricao.trim(),
      valor: this.valor,
      categoria: this.categoria,
      tipo: 'receita',
      mes: new Date().toISOString().substring(0, 7), 
      dataInclusao: new Date()
    });

    
    this.limparFormulario();
    
    console.log('Receita adicionada via service');
    console.log('Total de receitas:', this.receitas.length);
  }

  removerReceita(id: number): void {
    const confirmacao = confirm('Tem certeza que deseja remover esta receita?');
    if (confirmacao) {
      this.financasService.remover(id);
      console.log('Receita removida. Total de receitas:', this.receitas.length);
    }
  }

  limparFormulario(): void {
    this.descricao = '';
    this.valor = null;
    this.categoria = '';
  }

  obterTotalReceitas(): number {
    return this.receitas.reduce((total, receita) => total + receita.valor, 0);
  }

  obterReceitasPorCategoria(categoria: string): Registro[] {
    return this.receitas.filter((receita) => receita.categoria === categoria);
  }

  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  formatarData(data: Date): string {
    return data.toLocaleDateString('pt-BR');
  }
}