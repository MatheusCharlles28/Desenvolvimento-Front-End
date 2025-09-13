import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './media.html',
  styleUrls: ['./media.css'],
})
export class MediaComponent {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;

  mediaAritmetica: number = 0;
  mediaPonderada: number = 0;
  somaMedias: number = 0;
  mediaDasMedias: number = 0;

  resultadosCalculados: boolean = false;

  calcularMedias(): void {
    if (this.num1 === null || this.num2 === null || this.num3 === null) {
      alert('Por favor, digite todos os três números!');
      return;
    }

    this.mediaAritmetica = (this.num1 + this.num2 + this.num3) / 3;

    const peso1 = 3;
    const peso2 = 2;
    const peso3 = 5;
    const somaPesos = peso1 + peso2 + peso3;

    this.mediaPonderada =
      (this.num1 * peso1 + this.num2 * peso2 + this.num3 * peso3) / somaPesos;

    this.somaMedias = this.mediaAritmetica + this.mediaPonderada;

    this.mediaDasMedias = (this.mediaAritmetica + this.mediaPonderada) / 2;

    this.resultadosCalculados = true;
  }

  limparCampos(): void {
    this.num1 = 0;
    this.num2 = 0;
    this.num3 = 0;
    this.resultadosCalculados = false;
    this.mediaAritmetica = 0;
    this.mediaPonderada = 0;
    this.somaMedias = 0;
    this.mediaDasMedias = 0;
  }
}
