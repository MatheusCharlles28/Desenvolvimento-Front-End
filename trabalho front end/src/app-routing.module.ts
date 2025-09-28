import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroReceitaComponent } from './cadastro-receita/cadastro-receita.component';
import { CadastroDespesaComponent } from './cadastro-despesas/cadastro-despesa.component';
import { ListaFinancasComponent } from './lista/lista-financas.component';
import { RelatoriosComponent } from './relatorio/relatorios.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'receitas', component: CadastroReceitaComponent },
  { path: 'despesas', component: CadastroDespesaComponent },
  { path: 'lista', component: ListaFinancasComponent },
  { path: 'relatorios', component: RelatoriosComponent },
];
