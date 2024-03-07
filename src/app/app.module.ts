import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { FaleConoscoFormComponent } from './pages/fale-conosco/fale-conosco-form/fale-conosco-form.component';
import { PhoneMaskDirective } from './_directtives/phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    FaleConoscoComponent,
    CardDashboardComponent,
    NavbarComponent,
    SobreNosComponent,
    ServicosComponent,
    FaleConoscoFormComponent,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
