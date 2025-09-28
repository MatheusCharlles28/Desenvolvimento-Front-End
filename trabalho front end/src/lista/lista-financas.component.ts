import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FinancasService, Registro } from './financas.service';

@Component({
  selector: 'app-lista-financas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-financas.component.html',
  styleUrls: ['./lista-financas.component.css']
})
export class ListaFinancasComponent {
  
  filtroReceitas: string = '';
  filtroDespesas: string = '';
  receitaEditando: Registro | null = null;
  despesaEditando: Registro | null = null;
  
  categoriasReceitas: string[] = ['salário', 'freelance', 'investimentos', 'outros'];
  categoriasDespesas: string[] = ['alimentação', 'transporte', 'moradia', 'saúde', 'educação', 'lazer', 'outros'];

  constructor(private financas: FinancasService) {
    
  }

  
  get receitas(): Registro[] {
    return this.financas.getReceitas();
  }

  get despesas(): Registro[] {
    return this.financas.getDespesas();
  }

  
  editarReceita(receita: Registro) { 
    this.receitaEditando = { ...receita }; 
  }

  salvarReceita() {
    if (this.receitaEditando) {
      this.financas.atualizar(this.receitaEditando.id, this.receitaEditando);
      
      this.cancelarEdicaoReceita();
    }
  }

  cancelarEdicaoReceita() { 
    this.receitaEditando = null; 
  }

  excluirReceita(id: number) {
    if (confirm('Tem certeza que deseja excluir esta receita?')) {
      this.financas.remover(id);
      
    }
  }

  
  editarDespesa(despesa: Registro) { 
    this.despesaEditando = { ...despesa }; 
  }

  salvarDespesa() {
    if (this.despesaEditando) {
      this.financas.atualizar(this.despesaEditando.id, this.despesaEditando);
      
      this.cancelarEdicaoDespesa();
    }
  }

  cancelarEdicaoDespesa() { 
    this.despesaEditando = null; 
  }

  excluirDespesa(id: number) {
    if (confirm('Tem certeza que deseja excluir esta despesa?')) {
      this.financas.remover(id);
      
    }
  }

  
  get receitasFiltradas(): Registro[] {
    return this.filtroReceitas.trim()
      ? this.receitas.filter(r => r.descricao.toLowerCase().includes(this.filtroReceitas.toLowerCase()))
      : this.receitas;
  }

  get despesasFiltradas(): Registro[] {
    return this.filtroDespesas.trim()
      ? this.despesas.filter(d => d.descricao.toLowerCase().includes(this.filtroDespesas.toLowerCase()))
      : this.despesas;
  }

  
  obterTotalReceitas(): number { 
    return this.receitas.reduce((s, r) => s + r.valor, 0); 
  }

  obterTotalDespesas(): number { 
    return this.despesas.reduce((s, r) => s + r.valor, 0); 
  }

  obterSaldo(): number { 
    return this.obterTotalReceitas() - this.obterTotalDespesas(); 
  }

  
  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatarData(data: Date): string {
    return data.toLocaleDateString('pt-BR');
  }
}