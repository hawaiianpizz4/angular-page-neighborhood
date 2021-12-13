import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BarrioComponent } from './barrio/barrio.component';
import { NegocioComponent } from './negocio/negocio.component';
import { LugarinteresComponent } from './lugarinteres/lugarinteres.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesomosComponent } from './quienesomos/quienesomos.component';

const navegacion:Routes=[
  {path:'inicio', component: InicioComponent},
  {path:'barrio',component:BarrioComponent},
  {path:'negocios',component:NegocioComponent},
  {path:'lugaresinteres',component:LugarinteresComponent},
  {path:'quienesomos',component:QuienesomosComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    BarrioComponent,
    NegocioComponent,
    LugarinteresComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    QuienesomosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(navegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
