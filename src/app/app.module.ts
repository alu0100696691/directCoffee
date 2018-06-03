import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'inicio', component: InicioComponent },
  {path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
