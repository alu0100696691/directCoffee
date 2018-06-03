import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { CursosComponent } from './cursos/cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'nuevoCurso', component: NuevoCursoComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    CursosComponent,
    NuevoCursoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
