import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancasService, Registro } from '../lista/financas.service';

interface SaldoMensal {
  mes: string;
  receitas: number;
  despesas: number;
  saldo: number;
}

interface CategoriaPercentual {
  categoria: string;
  valor: number;
  percentual: number;
}

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  saldosMensais: SaldoMensal[] = [];
  categoriasPercentual: CategoriaPercentual[] = [];

  mediaDespesasMensal: number = 0;
  categoriaMaiorGasto: CategoriaPercentual | null = null;
  mesMaiorSaldo: SaldoMensal | null = null;
  mesMenorSaldo: SaldoMensal | null = null;

  totalReceitas: number = 0;
  totalDespesas: number = 0;
  saldoTotal: number = 0;

  constructor(private financas: FinancasService) {}

  
  get receitas(): Registro[] {
    return this.financas.getReceitas();
  }

  get despesas(): Registro[] {
    return this.financas.getDespesas();
  }

  ngOnInit(): void {
    
    this.calcularRelatorios();
  }

  
  atualizarRelatorios(): void {
    this.calcularRelatorios();
  }

  private calcularRelatorios(): void {
    this.calcularSaldosMensais();
    this.calcularTotaisGerais();
    this.calcularMediaDespesas();
    this.calcularCategoriasPercentual();
    this.identificarMesesExtremos();
    this.identificarCategoriaMaior();
  }

  private calcularSaldosMensais(): void {
    const grupos: { [mes: string]: { receitas: number; despesas: number } } = {};

    
    this.receitas.forEach(r => {
      if (!grupos[r.mes]) grupos[r.mes] = { receitas: 0, despesas: 0 };
      grupos[r.mes].receitas += r.valor;
    });

    this.despesas.forEach(d => {
      if (!grupos[d.mes]) grupos[d.mes] = { receitas: 0, despesas: 0 };
      grupos[d.mes].despesas += d.valor;
    });

    this.saldosMensais = Object.keys(grupos).map(mes => {
      const rec = grupos[mes].receitas;
      const desp = grupos[mes].despesas;
      return {
        mes,
        receitas: rec,
        despesas: desp,
        saldo: rec - desp
      };
    });

    this.saldosMensais.sort((a, b) => a.mes.localeCompare(b.mes));
  }

  private calcularTotaisGerais(): void {
    
    this.totalReceitas = this.receitas.reduce((s, r) => s + r.valor, 0);
    this.totalDespesas = this.despesas.reduce((s, d) => s + d.valor, 0);
    this.saldoTotal = this.totalReceitas - this.totalDespesas;
  }

  private calcularMediaDespesas(): void {
    if (this.saldosMensais.length === 0) {
      this.mediaDespesasMensal = 0;
      return;
    }
    const somaDespesas = this.saldosMensais.reduce((s, m) => s + m.despesas, 0);
    this.mediaDespesasMensal = somaDespesas / this.saldosMensais.length;
  }

  private calcularCategoriasPercentual(): void {
    const totalDesp = this.totalDespesas;
    if (totalDesp === 0) {
      this.categoriasPercentual = [];
      return;
    }

    const grupos: { [cat: string]: number } = {};
    
    this.despesas.forEach(d => {
      grupos[d.categoria] = (grupos[d.categoria] || 0) + d.valor;
    });

    this.categoriasPercentual = Object.keys(grupos).map(cat => {
      const valor = grupos[cat];
      const percentual = (valor / totalDesp) * 100;
      return { categoria: cat, valor, percentual };
    });

    this.categoriasPercentual.sort((a, b) => b.percentual - a.percentual);
  }

  private identificarMesesExtremos(): void {
    if (this.saldosMensais.length === 0) {
      this.mesMaiorSaldo = null;
      this.mesMenorSaldo = null;
      return;
    }
    this.mesMaiorSaldo = this.saldosMensais.reduce((max, m) => m.saldo > max.saldo ? m : max, this.saldosMensais[0]);
    this.mesMenorSaldo = this.saldosMensais.reduce((min, m) => m.saldo < min.saldo ? m : min, this.saldosMensais[0]);
  }

  private identificarCategoriaMaior(): void {
    if (this.categoriasPercentual.length === 0) {
      this.categoriaMaiorGasto = null;
      return;
    }
    this.categoriaMaiorGasto = this.categoriasPercentual[0];
  }

  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatarMesAnoExibicao(mes: string): string {
    const partes = mes.split('-');
    if (partes.length === 2) {
      const ano = partes[0];
      const m = parseInt(partes[1], 10);
      const nomesMes = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      return `${nomesMes[m - 1]}/${ano}`;
    }
    return mes;
  }

  obterCorSaldo(saldo: number): string {
    if (saldo > 0) return 'positivo';
    if (saldo < 0) return 'negativo';
    return 'neutro';
  }

  obterCorBarra(percentual: number): string {
    if (percentual > 50) return '#4caf50'; 
    if (percentual > 20) return '#8bc34a'; 
    return '#cddc39'; 
  }
}