import { Component } from '@angular/core';
import { SomaComponent } from './soma/soma';
import { TrocoComponent } from './troco/troco';
import { CalcularComponent } from './calcularkg/calcular';
import { ReajusteComponent } from './reajuste/reajuste';
import { MediaComponent } from './media/media'; 
import { MaiorValorComponent } from './maiorvalor/maiorvalor';
import { MenorValorComponent } from './menorvalor/menorvalor';
import { ImparComponent } from './impar/impar';
import { ProdutoComponent } from './produto/produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SomaComponent,
    TrocoComponent,
    CalcularComponent,
    ReajusteComponent,
    MediaComponent,
    MaiorValorComponent,
    MenorValorComponent,
    ImparComponent,
    ProdutoComponent,
  ],
  template: `
    <app-soma></app-soma>
    <app-troco></app-troco>
    <app-calcular></app-calcular>
    <app-reajuste></app-reajuste>
    <app-media></app-media>
    <app-maiorvalor></app-maiorvalor>
    <app-menorvalor></app-menorvalor>
    <app-impar></app-impar>
    <app-produto></app-produto>
  `,
})
export class AppComponent {}