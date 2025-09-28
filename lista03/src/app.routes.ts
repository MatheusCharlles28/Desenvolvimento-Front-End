import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { DetalheImagemComponent } from './detalhe-imagem/detalhe-imagem.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DetalheProdutoComponent } from './produtos/detalhe-produto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalheNoticiaComponent } from './noticias/detalhe-noticia.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalheUsuarioComponent } from './usuarios/detalhe-usuario.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { VendasComponent } from './vendas/vendas.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { CursosComponent } from './cursos/cursos.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { ProfessoresComponent } from './professores/professores.component';
import { DetalheProfessorComponent } from './detalhe-professor/detalhe-professor.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalhe', component: DetalheImagemComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto', component: DetalheProdutoComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detalhe-noticia', component: DetalheNoticiaComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent, children: [
        { path: 'detalhe', component: DetalheUsuarioComponent }
      ]},
      { path: 'relatorios', component: RelatoriosComponent, children: [
        { path: 'vendas', component: VendasComponent },
        { path: 'estoque', component: EstoqueComponent }
      ]}
    ]
  },
  { path: 'cursos', component: CursosComponent, children: [
    { path: 'detalhe', component: DetalheCursoComponent }
  ]},
  { path: 'professores', component: ProfessoresComponent, children: [
    { path: 'detalhe', component: DetalheProfessorComponent }
  ]}
];