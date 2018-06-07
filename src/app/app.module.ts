import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { CursosComponent } from './cursos/cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroComponent } from './autentificacion/registro/registro.component';

import { CursosService } from './servicios/cursos.service';
import { AutentificacionService } from './servicios/autentificacion.service';
import { LoginComponent } from './autentificacion/login/login.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'nuevoCurso', component: NuevoCursoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    CursosComponent,
    NuevoCursoComponent,
    UsuariosComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ CursosService,AutentificacionService ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
