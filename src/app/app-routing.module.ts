import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component'

const routes: Routes = [
  {path: 'contato', component: ContatoComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'formacao', component: FormacaoComponent},
  {path: '', component: ApresentacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
