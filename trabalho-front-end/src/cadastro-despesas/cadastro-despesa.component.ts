
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FinancasService, Registro  } from './../lista/financas.service';

@Component({
  selector: 'app-cadastro-despesa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.css']
})
export class CadastroDespesaComponent {
  descricao: string = '';
  valor: number | null = null;
  categoria: string = '';
  
  
  categoriasSugeridas: string[] = [
    'alimentação',
    'transporte',
    'moradia',
    'saúde',
    'educação',
    'lazer',
    'outros'
  ];

  constructor(private financasService: FinancasService) {}

  
  get despesas(): Registro[] {
    return this.financasService.getDespesas();
  }

  adicionarDespesa(): void {
    
    if (!this.descricao.trim()) {
      alert('Por favor, informe a descrição da despesa.');
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
      tipo: 'despesa',
      mes: new Date().toISOString().substring(0, 7), 
      dataInclusao: new Date()
    });

    
    this.limparFormulario();
    
    console.log('Despesa adicionada via service');
    console.log('Total de despesas:', this.despesas.length);
  }

  removerDespesa(id: number): void {
    const confirmacao = confirm('Tem certeza que deseja remover esta despesa?');
    if (confirmacao) {
      this.financasService.remover(id);
      console.log('Despesa removida. Total de despesas:', this.despesas.length);
    }
  }

  limparFormulario(): void {
    this.descricao = '';
    this.valor = null;
    this.categoria = '';
  }

  obterTotalDespesas(): number {
    return this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
  }

  obterDespesasPorCategoria(categoria: string): Registro[] {
    return this.despesas.filter(despesa => despesa.categoria === categoria);
  }

  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  formatarData(data: Date): string {
    return data.toLocaleDateString('pt-BR');
  }
}