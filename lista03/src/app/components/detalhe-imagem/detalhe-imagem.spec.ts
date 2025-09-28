import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheImagem } from './detalhe-imagem';

describe('DetalheImagem', () => {
  let component: DetalheImagem;
  let fixture: ComponentFixture<DetalheImagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheImagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheImagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
