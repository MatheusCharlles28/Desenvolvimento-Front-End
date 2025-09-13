import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './soma.html',
  styleUrl: './soma.css'
})
export class SomaComponent {
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;

  somar(){
    let n1 = Number(this.numero1) || 0;
    let n2 = Number(this.numero2) || 0;
    this.resultado = n1 + n2;
  }
}
