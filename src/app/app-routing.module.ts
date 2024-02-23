import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'fale-conosco', component: FaleConoscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
