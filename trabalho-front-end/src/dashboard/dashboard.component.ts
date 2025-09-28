import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancasService, Registro } from '../lista/financas.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private financas: FinancasService) {}

  ngOnInit(): void {
    
  }

  get totalReceitas(): number {
    return this.financas.getTotais().totalReceitas;
  }

  get totalDespesas(): number {
    return this.financas.getTotais().totalDespesas;
  }

  get saldo(): number {
    return this.financas.getTotais().saldo;
  }

  
  get receitas(): Registro[] {
    return this.financas.getReceitas();
  }

  get despesas(): Registro[] {
    return this.financas.getDespesas();
  }

  
  get quantidadeReceitas(): number {
    return this.receitas.length;
  }

  get quantidadeDespesas(): number {
    return this.despesas.length;
  }

  get mediaReceitas(): number {
    return this.quantidadeReceitas > 0 ? this.totalReceitas / this.quantidadeReceitas : 0;
  }

  get mediaDespesas(): number {
    return this.quantidadeDespesas > 0 ? this.totalDespesas / this.quantidadeDespesas : 0;
  }

  get percentualGasto(): number {
    return this.totalReceitas > 0 ? (this.totalDespesas / this.totalReceitas) * 100 : 0;
  }

  get statusFinanceiro(): string {
    if (this.saldo > 0) return 'positivo';
    if (this.saldo < 0) return 'negativo';
    return 'equilibrado';
  }

  
  get receitasRecentes(): Registro[] {
    return this.receitas
      .sort((a, b) => new Date(b.dataInclusao).getTime() - new Date(a.dataInclusao).getTime())
      .slice(0, 5);
  }

  get despesasRecentes(): Registro[] {
    return this.despesas
      .sort((a, b) => new Date(b.dataInclusao).getTime() - new Date(a.dataInclusao).getTime())
      .slice(0, 5);
  }

  
  get categoriasMaiorGasto(): Array<{categoria: string, total: number, percentual: number}> {
    const categorias: { [key: string]: number } = {};
    
    this.despesas.forEach(despesa => {
      categorias[despesa.categoria] = (categorias[despesa.categoria] || 0) + despesa.valor;
    });

    return Object.entries(categorias)
      .map(([categoria, total]) => ({
        categoria,
        total,
        percentual: this.totalDespesas > 0 ? (total / this.totalDespesas) * 100 : 0
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 5);
  }

  
  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatarPercentual(valor: number): string {
    return `${valor.toFixed(1)}%`;
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }

  
  atualizarDashboard(): void {
    
    console.log('Dashboard atualizado');
  }

  
  temReceitas(): boolean {
    return this.quantidadeReceitas > 0;
  }

  temDespesas(): boolean {
    return this.quantidadeDespesas > 0;
  }

  temDados(): boolean {
    return this.temReceitas() || this.temDespesas();
  }

  
  obterCorSaldo(): string {
    switch(this.statusFinanceiro) {
      case 'positivo': return '#4caf50';
      case 'negativo': return '#f44336';
      default: return '#ff9800';
    }
  }

  obterCorPercentual(): string {
    if (this.percentualGasto <= 70) return '#4caf50'; 
    if (this.percentualGasto <= 90) return '#ff9800'; 
    return '#f44336'; 
  }
}