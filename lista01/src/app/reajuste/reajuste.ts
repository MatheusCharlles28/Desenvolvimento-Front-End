import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reajuste',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <h2>Reajuste de Saldo</h2>
      
      <input type="number" [(ngModel)]="saldo" placeholder="Informe o saldo" />

      <button (click)="calcularReajuste()">Calcular Reajuste</button>

      <div *ngIf="saldoReajustado !== null">
        <p>Saldo original: {{ saldo | currency:'BRL':'symbol':'1.2-2':'pt' }}</p>
        <p>Saldo com reajuste: {{ saldoReajustado | currency:'BRL':'symbol':'1.2-2':'pt' }}</p>
      </div>
    </div>
  `,
})
export class ReajusteComponent {
  saldo: number = 0;
  saldoReajustado: number | null = null;

  calcularReajuste() {
    this.saldoReajustado = this.saldo * 1.01;
  }
}
