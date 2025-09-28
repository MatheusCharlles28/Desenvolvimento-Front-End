import { Injectable } from '@angular/core';

export interface Registro {
  id: number;
  descricao: string;
  valor: number;
  categoria: string;
  tipo: 'receita' | 'despesa';
  mes: string; 
  dataInclusao: Date; 
}

@Injectable({
  providedIn: 'root',
})
export class FinancasService {
  private registros: Registro[] = [];
  private proximoId = 1;

  
  getReceitas(): Registro[] {
    return this.registros.filter((r) => r.tipo === 'receita');
  }

  
  getDespesas(): Registro[] {
    return this.registros.filter((r) => r.tipo === 'despesa');
  }

  
  adicionar(registro: Omit<Registro, 'id'>) {
    this.registros.push({
      ...registro,
      id: this.proximoId++,
      dataInclusao: registro.dataInclusao || new Date(),
    });
  }

  
  remover(id: number) {
    this.registros = this.registros.filter((r) => r.id !== id);
  }

  
  atualizar(id: number, dados: Partial<Registro>) {
    const index = this.registros.findIndex((r) => r.id === id);
    if (index >= 0) {
      this.registros[index] = { ...this.registros[index], ...dados };
    }
  }

  
  getTotais() {
    const totalReceitas = this.getReceitas().reduce((s, r) => s + r.valor, 0);
    const totalDespesas = this.getDespesas().reduce((s, d) => s + d.valor, 0);
    return {
      totalReceitas,
      totalDespesas,
      saldo: totalReceitas - totalDespesas,
    };
  }
}
