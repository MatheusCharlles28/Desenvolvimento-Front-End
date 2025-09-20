import { Component } from '@angular/core';
import { ListaNumeros } from './lista-numeros/lista-numeros';
import { ListaCompras } from './lista-compras/lista-compras';
import { ContadorNomes } from './contador-nomes/contador-nomes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListaNumeros,
    ListaCompras,
    ContadorNomes,
  ],
  template: `<app-lista-numeros></app-lista-numeros>
             <app-lista-compras></app-lista-compras>
             <app-contador-nomes></app-contador-nomes>
  `,
})
export class AppComponent {}